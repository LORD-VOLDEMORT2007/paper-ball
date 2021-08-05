class Paper
{

    constructor(){

        var options = {

            'isStatic' : false,
            'restitution' : 0.3,
            'friction': 0.5,
            'density': 1.2

        }

        this.body = Bodies.circle(50 , 100 , 45 , options)
        World.add(world,this.body);
        
        this.radius = 45

    }

    display(){

        var pos = this.body.position
        
        fill ("white")
        circle(pos.x , pos.y  , this.radius)

    }
    

}