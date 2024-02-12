class ClickAndHold {
    /**
     *
     * @param {EventTarget} target
     * @param {Function} callback
     */
    constructor (target, callback, timeout) {
        this.target = target
        this.callback = callback
        this.isHeld = false
        this.timeout = timeout
        this.activeHoldTimeoutId = null

        ["mousedown", "touchstart"].forEach(type => {
            this.target.addEventListener(type, this._onHoldStart.bind(this))
        })
        
        ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this))
        })
        
    }
    _onHoldStart() {
        this.isHeld = true
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {
                this.callback()
            }
        }, this.timeout)
    }
    _onHoldEnd() {
        this.isHeld = false
        clearTimeout(this.activeHoldTimeoutId)
    }
}