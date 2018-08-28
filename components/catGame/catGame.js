function CatGame(container) {
    this.container = container
    this.catEl = null
    this.layersEl = null
    //начальный уровень  0 - точка траснформации
    this.curentLevel = 0
    this.topCoord = "183px"
    this.middleCoord = "283px"
    this.bottomCoord = "383px"
    this.jumpUp = this.jumpUp.bind(this)
    this.jumpDown = this.jumpDown.bind(this)
}

let cgprt = CatGame.prototype
cgprt.CLASS_NAME = "catGame"

cgprt.stepY = 100

cgprt.render = function () {
    this.catGameEl = document.createElement("div")
    this.catGameEl.className = this.CLASS_NAME
    this.container.appendChild(this.catGameEl)

    this.catEl = new Cat().render()
    this.catGameEl.appendChild(this.catEl)

    this.layersEl = new Layers(this.topCoord, this.middleCoord, this.bottomCoord).render()
    this.catGameEl.appendChild(this.layersEl)

    this.navigatorEl = new Navigator(this.jumpUp, this.jumpDown).render()
    this.catGameEl.appendChild(this.navigatorEl)
}

cgprt.jumpUp = function () {
    // продумать другой способ перебора swith -case?!

    // если котик уже на верхнем уровне
    //то он прыгает вверх и падает вниз
    if (this.curentLevel == -1) {
        this.curentLevel -= 1
        this.catEl.classList.add("jumpUp")
        this.catEl.style.transform = `translateY(${this.curentLevel * this.stepY}px)`
        setTimeout(this.jumpDown, 200)
    }

    else {
        this.curentLevel -= 1
        this.catEl.classList.remove("jumpDown")
        this.catEl.classList.add("jumpUp")
        this.catEl.style.transform = `translateY(${this.curentLevel * this.stepY}px)`
    }
}

cgprt.jumpDown = function () {
    // если котик и так уже на нижнем уровне
    // ниже он уже не прыгнет
    if (this.curentLevel !== 1) {
        this.curentLevel += 1
        this.catEl.classList.add("jumpDown")
        this.catEl.style.transform = `translateY(${this.curentLevel * this.stepY}px)`
    }
}

cgprt = null