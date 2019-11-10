
// import bulb from '../../img/particle.png';
//import //logger from 'js///logger';

class Smoke {
    constructor(x, y, smokeSettings) {
        this.x = x;
        this.y = y;

        this.angle = Math.random() * 359;
        this.velY = Math.floor(Math.random() * (-6) + 3) / (smokeSettings.velYkoef || 20);

        this.setup(smokeSettings);
    }

    setup(settings) {
        const {size, startSize , maxSize , endSize, speed, alpha, velX, maxLifeTime, minSpawnTime} = settings;
        this.size = size;
        this.startSize = startSize;
        this.maxSize = maxSize;
        this.endSize = endSize;
        this.speed = speed;
        this.alpha = alpha;
        this.lifeTime = 0;
        this.velX = velX;
        this.maxLifeTime =  maxLifeTime;
        this.minSpawnTime =  minSpawnTime;
        this.paused = false;
    }

    update(deltaTime) {
        this.lifeTime += deltaTime;
        this.angle += 0.2;
        const lifePerc = ((this.lifeTime / this.maxLifeTime) * 100);
        if (this.size < 1)
            this.alpha = 0;

        if (lifePerc > 80) {
            this.size -= lifePerc / 30;
        } else {
            this.size = this.startSize + ((this.maxSize - this.startSize) * lifePerc * 0.1);
        }

        this.x += this.speed * deltaTime;
        this.y += this.velY;
    }
}

export default class CreateSmoke {
    constructor(canvas, settings, smokeSettings) {
        this.canvas = canvas;
        this.bulb = '/images/particle.png';

        this.ctx = canvas.getContext('2d');
        this.settings = settings;
        this.smokeSettings = smokeSettings;
        this.smokeImage = new Image();

        this.parts = [];
        this.lastTime = null;
        this.loading = true;
        this.currentMiliseconds = null;

        this.paused = false;

        this.render = this.render.bind(this);

        this.setup();
    }

    setup() {
        this.smokeImage.src = this.bulb;
        this.smokeImage.onload = () => {
            this.loading = false;
            this.tryRender();
        };

        this.canvas.width = window.innerWidth;
        this.canvas.height = this.settings.canvasHeight;

        this.ctx.save();
    }

    spawn(timestamp) {
        const maxCount = this.smokeSettings.maxCount || 150;

        if (this.parts.length >= maxCount) {
            return;
        }

        if (!this.lastTime || timestamp > this.lastTime + this.smokeSettings.minSpawnTime) {
            this.lastTime = timestamp;
            this.parts.push(new Smoke(this.settings.emitterX, this.settings.emitterY, this.smokeSettings));
        }
    }

    tryRender() {
        if(this.renderToken != null) {
            return;
        }
        this.render();
    }

    render(timestamp = performance.now()) {
        this.renderToken = null;
        if (this.loading) {
            return;
        }

        if (this.paused && this.parts.length === 0) {
            return;
        }
        const lastMiliseconds = this.currentMiliseconds || timestamp;
        this.currentMiliseconds = timestamp;
        const deltaTime = this.currentMiliseconds - lastMiliseconds;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let index = this.parts.length - 1; index >= 0; --index) {
            const particle = this.parts[index];

            particle.update(deltaTime);

            if (particle.x < 0 || particle.lifeTime > this.smokeSettings.maxLifeTime) {
                this.parts.splice(index, 1);
                continue;
            }

            const offsetX = -particle.size / 2;
            const offsetY = -particle.size / 3;

            this.ctx.save();

            this.ctx.translate(particle.x + offsetX, particle.y + offsetY);
            this.ctx.rotate(particle.angle / 90 * Math.PI);
            this.ctx.globalAlpha = particle.alpha;
            this.ctx.drawImage(this.smokeImage, offsetX, offsetY, particle.size, particle.size);

            this.ctx.restore();
        }
        if(!this.paused)
            this.spawn(timestamp);
        if(this.parts.length > 0) {
            this.renderToken = requestAnimationFrame(this.render);
        }
    }

    pause() {
        if (this.paused)
            return;

        // this.paused = true;
        // this.currentMiliseconds = null;
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    play() {
        if (!this.paused)
            return;
        
        this.paused = false;
        this.tryRender();
    }
};
