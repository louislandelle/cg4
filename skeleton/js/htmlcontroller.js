var HtmlController = function(sceneController)
{
    this.sceneController = sceneController;
};

HtmlController.prototype.setup = function()
{
    window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
    document.addEventListener("keydown", this.onDocumentKeyDown.bind(this), false);
    document.addEventListener("mousedown", this.onDocumentMouseDown.bind(this), false);
    document.addEventListener("mousemove", this.onDocumentMouseMove.bind(this), false);
    document.addEventListener("mouseup", this.onDocumentMouseUp.bind(this), false);
};

//event handler that is called when the window is resized
HtmlController.prototype.onWindowResize = function()
{
    this.sceneController.texCamera.aspect = window.innerWidth / window.innerHeight/2;
    this.sceneController.texCamera.updateProjectionMatrix();
    this.sceneController.camera.aspect = window.innerWidth / window.innerHeight/2;
    this.sceneController.camera.updateProjectionMatrix();
    //this.sceneController.cubeCamera.aspect = window.innerWidth / window.innerHeight/2;
    //this.sceneController.cubeCamera.updateProjectionMatrix();

    this.sceneController.texRenderer.setSize( window.innerWidth/2 - 20, window.innerHeight);
    this.sceneController.renderer.setSize( window.innerWidth/2  - 20, window.innerHeight);
    this.sceneController.render();
};


HtmlController.prototype.onDocumentMouseDown = function(event)
{
    //event.button 0 - 4 gives right, middle, left, side button
    // window.console.log("mouse down at " + event.x + " / " + event.y + " with button " + event.button);
};

HtmlController.prototype.onDocumentMouseMove = function(event)
{
    // // window.console.log("mouse move");
};

HtmlController.prototype.onDocumentMouseUp = function(event)
{
    //event.button 0 - 4 gives right, middle, left, side button
    // window.console.log("mouse up at " + event.x + " / " + event.y + " with button " + event.button);
};


HtmlController.prototype.onDocumentKeyDown = function(event)
{
    //as alternative to event.key one can use event.which that returns the ASCII codes, e.g., r = 82
    var keyCode = event.key;
    // window.console.log("key input (ASCII): " + event.which + ". key input (KEY): " + keyCode);

    switch(keyCode)
    {
    }
    this.sceneController.render();
};
