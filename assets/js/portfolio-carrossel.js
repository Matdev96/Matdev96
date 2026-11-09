/* =========================================================
   CARROSSEL DE PROJETOS
   - slides empilhados no mesmo grid, posicionados via --off
   - autoplay: a barra do ponto ativo enche (CSS) e, ao terminar,
     avança para o próximo slide (evento animationend)
   - pausa ao passar o mouse, ao focar, fora da tela e com a aba oculta
   - setas, pontos, arrastar/deslizar e teclado (← →)
   ========================================================= */
(function () {
    'use strict';

    function initCarrossel(root) {
        var track = root.querySelector('.pc-track');
        var slides = Array.prototype.slice.call(root.querySelectorAll('.pc-slide'));
        var dots = Array.prototype.slice.call(root.querySelectorAll('.pc-dot'));
        var prevBtn = root.querySelector('.pc-prev');
        var nextBtn = root.querySelector('.pc-next');
        var playBtn = root.querySelector('.pc-play');
        var live = root.querySelector('.pc-live');
        var total = slides.length;
        if (!track || !total) return;

        var current = 0;
        var pauses = {};
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var autoplay = root.getAttribute('data-autoplay') === 'true' && !reduceMotion && total > 1;

        /* Distância circular do slide i até o atual (ex.: -1, 0, 1, 2...) */
        function offsetOf(i) {
            var d = i - current;
            if (d > total / 2) d -= total;
            if (d < -total / 2) d += total;
            return d;
        }

        function render() {
            slides.forEach(function (slide, i) {
                var off = offsetOf(i);
                var active = off === 0;
                slide.style.setProperty('--off', off);
                slide.style.setProperty('--sc', active ? 1 : 0.94);
                slide.classList.toggle('is-active', active);
                slide.classList.toggle('is-near', Math.abs(off) === 1);
                slide.setAttribute('aria-hidden', active ? 'false' : 'true');
                slide.querySelectorAll('a').forEach(function (a) {
                    if (active) a.removeAttribute('tabindex');
                    else a.setAttribute('tabindex', '-1');
                });
                /* Carrega já os vizinhos para não aparecer imagem vazia na troca */
                if (Math.abs(off) <= 2) {
                    var img = slide.querySelector('img');
                    if (img && img.loading === 'lazy') img.loading = 'eager';
                }
            });
            dots.forEach(function (dot, i) {
                var active = i === current;
                dot.classList.toggle('is-active', active);
                if (active) dot.setAttribute('aria-current', 'true');
                else dot.removeAttribute('aria-current');
            });
        }

        function announce() {
            if (!live) return;
            var name = slides[current].querySelector('.pc-name');
            live.textContent = 'Projeto ' + (current + 1) + ' de ' + total + (name ? ': ' + name.textContent : '');
        }

        function goTo(index, fromUser) {
            current = ((index % total) + total) % total;
            render();
            if (fromUser) announce();
        }

        /* ---------- pausas (várias causas ao mesmo tempo) ---------- */
        function setPause(reason, on) {
            if (on) pauses[reason] = true;
            else delete pauses[reason];
            root.classList.toggle('is-paused', Object.keys(pauses).length > 0);
        }

        if (autoplay) {
            root.classList.add('is-auto');

            root.addEventListener('animationend', function (e) {
                if (e.animationName !== 'pc-fill') return;
                var dot = e.target.closest('.pc-dot');
                if (dot && dot.classList.contains('is-active')) goTo(current + 1, false);
            });

            root.addEventListener('pointerenter', function (e) {
                if (e.pointerType === 'mouse') setPause('hover', true);
            });
            root.addEventListener('pointerleave', function () { setPause('hover', false); });

            root.addEventListener('focusin', function () { setPause('focus', true); });
            root.addEventListener('focusout', function (e) {
                if (!root.contains(e.relatedTarget)) setPause('focus', false);
            });

            document.addEventListener('visibilitychange', function () {
                setPause('hidden', document.hidden);
            });

            if ('IntersectionObserver' in window) {
                new IntersectionObserver(function (entries) {
                    setPause('offscreen', !entries[0].isIntersecting);
                }, { threshold: 0.35 }).observe(root);
            }

            if (playBtn) {
                playBtn.addEventListener('click', function () {
                    var stopped = root.classList.toggle('is-stopped');
                    playBtn.setAttribute('aria-label', stopped ? 'Retomar apresentação' : 'Pausar apresentação');
                });
            }
        }

        /* ---------- setas e pontos ---------- */
        if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1, true); });
        if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1, true); });
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () { goTo(i, true); });
        });

        /* ---------- teclado ---------- */
        root.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1, true); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1, true); }
        });

        /* ---------- arrastar / deslizar ---------- */
        var startX = null, startY = 0, deltaX = 0, dragging = false, pointerId = null, justDragged = false;

        function resetDrag() {
            startX = null;
            deltaX = 0;
            dragging = false;
            track.classList.remove('is-dragging');
            setPause('drag', false);
        }

        track.addEventListener('pointerdown', function (e) {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            startX = e.clientX;
            startY = e.clientY;
            deltaX = 0;
            dragging = false;
            pointerId = e.pointerId;
        });

        track.addEventListener('pointermove', function (e) {
            if (startX === null || e.pointerId !== pointerId) return;
            deltaX = e.clientX - startX;
            if (!dragging && Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(e.clientY - startY)) {
                dragging = true;
                track.classList.add('is-dragging');
                setPause('drag', true);
                try { track.setPointerCapture(pointerId); } catch (err) { /* ok */ }
            }
        });

        track.addEventListener('pointerup', function () {
            if (startX === null) return;
            if (dragging) {
                if (deltaX <= -50) goTo(current + 1, true);
                else if (deltaX >= 50) goTo(current - 1, true);
                justDragged = true;
                setTimeout(function () { justDragged = false; }, 60);
            }
            resetDrag();
        });
        track.addEventListener('pointercancel', resetDrag);

        /* Não abre o link ao soltar um arrasto; clique num vizinho leva até ele */
        track.addEventListener('click', function (e) {
            if (justDragged) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            var slide = e.target.closest('.pc-slide');
            if (slide && slide.classList.contains('is-near')) {
                e.preventDefault();
                goTo(slides.indexOf(slide), true);
            }
        }, true);

        render();
    }

    function start() {
        document.querySelectorAll('#portfolio-carrossel').forEach(initCarrossel);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
