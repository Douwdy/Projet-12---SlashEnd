import { useEffect, useRef, useMemo } from 'react';

const EmojiRain = () => {
    // Emoji Rain
    const emoji = useMemo(() => ['🌿', '🍂'], []);
    const circlesRef = useRef([]);

    useEffect(() => {
        const container = document.getElementById('emojiRain');

        for (let i = 0; i < 15; i++) {
            addCircle(i * 150, [10 + 0, 2000], emoji[Math.floor(Math.random() * emoji.length)]);
            addCircle(i * 150, [10 + 0, -500], emoji[Math.floor(Math.random() * emoji.length)]);
        }

        function addCircle(delay, range, color) {
            setTimeout(function () {
                let c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
                    x: -0.15 + Math.random() * 0.3,
                    y: 1 + Math.random() * 1
                }, range);
                circlesRef.current.push(c);
            }, delay);
        }

        class Circle {
            constructor(x, y, c, v, range) {
                this.x = x;
                this.y = y;
                this.color = c;
                this.v = v;
                this.range = range;
                this.element = document.createElement('span');
                this.element.style.opacity = 0;
                this.element.style.position = 'absolute';
                this.element.style.fontSize = '26px';
                this.element.style.color = 'hsl(' + (Math.random() * 360 | 0) + ',80%,50%)';
                this.element.innerHTML = c;
                container.appendChild(this.element);
            }

            update() {
                if (this.y > window.innerHeight * 4.7) {
                    this.y = 80 + Math.random() * 4;
                    this.x = this.range[0] + Math.random() * this.range[1];
                }
                this.y += this.v.y;
                this.x += this.v.x;
                this.element.style.opacity = 1;
                this.element.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
                this.element.style.mozTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
            }
        }

        function animate() {
            for (let i in circlesRef.current) {
                circlesRef.current[i].update();
            }
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            container.innerHTML = '';
            circlesRef.current = [];
        };
    }, [emoji]);
        return (
            <div id="emojiRain"></div>
        );
    };

export default EmojiRain;