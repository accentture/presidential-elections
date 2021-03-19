/* 
    --el constructor nunca mas se puede ejecutar una vez el componente esté creado
*/

/* 
    ngOnChanges() 
        --it is executed every time that a new value has entered or appear, 
        --it ocurrs when an input value has appeared,
        --if the input value change, it method is executed again
    ngOnInit()
        --it is as a specie of internal constructor
        --it initialize all content of component 
        --with this method we can make modifications with the DOM
        --it is execute only one time
        --use this method instead of constructor
    ngDoCheck()
        --it is execute after the ngOnInit()
        --it is executed when ocurrs changes in the component

        //--------------ngAfters
        --it affect to only to components
        ngAfterContentInit()
            --it is execute when all the content of component is loaded completely
        ngAfterContentCheked()
            --it is executed when something of content is modified
        ngAfterViewInit()
            --it initialize all the view (viewChild for instance)
            --view and view child will be initialized
        ngAfterViewChecked()
            --it is execute after a view or viewChild is modified

    ngOnDestroy()
        --executed when the component is destroyed
        --it for instance destroy listeners and observables that is doing executed
        --it is important to destroy the previous functionalities if were used, it enhance the performance
*/