const Exercises = {
    /*Leg*/
        leg01: {
            id: 'elevación de pierna',
            type: 'leg',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-standinglegraise.gif',
            description: 'elevación de pierna',
        },
    
        leg02: {
            id: 'sentadilla lateral',
            type: 'leg',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-alternatinglateralpistolsquat.gif',
            description: 'sentadilla lateral',
        },   
    
        leg03: {
            id: 'sentadilla isométrica',
            type: 'leg',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-isometricsquatladder-1.gif',
            description: 'sentadilla isométrica',
        }, 
        
        leg04: {
            id: 'estocada con pesas',
            type: 'leg',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-levitatinglunge.gif',
            description: 'estocada con pesas',
        },  
    
        leg05: {
            id: 'salto con sentadilla',
            type: 'leg',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-isometricsquatjumpladder.gif',
            description: 'salto con sentadilla',
        },  
    
        leg06: {
            id: 'saltos',
            type: 'leg',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-splitjump.gif',
            description: 'sentadilla nivel intermedio',
        }, 
    
        leg07: {
            id: 'deslizamiento con mancuernas',
            type: 'leg',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-dumbbelllungewithrotation.gif',
            description: 'deslizamiento con mancuernas',
        }, 
    
        leg08: {
            id: 'salto lateral',
            type: 'leg',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-alternatinglateralpistolsquat.gif',
            description: 'salto lateral',
        }, 
    
        leg09: {
            id: 'sentadilla con peso',
            type: 'leg',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-levitatinglunge.gif',
            description: 'sentadilla con peso',
        }, 
    
        leg10: {
            id: 'súper combo',
            type: 'leg',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-isometricsquatjumpladder.gif',
            description: 'súper combo',
        }, 
    
        leg12: {
            id: 'squat con banda',
            type: 'leg',
            level: 3,
            img: 'https://yurielkaim.com/wp-content/uploads/2017/04/Band-Front-Squat-via-Mens-Health.gif',
            description: 'squat con banda',
        }, 
    
        leg13: {
            id: 'peso alterno',
            type: 'leg',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-levitatinglunge.gif',
            description: 'peso alterno',
        }, 
    
        leg14: {
            id: 'saltos intensos',
            type: 'leg',
            level: 2,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/weightedisodynamicsquatjump-1457044138.gif?crop=1xw:1xh;center,top&resize=320:*',
            description: 'saltos intensos',
        }, 
    
        leg15: {
            id: 'zancada',
            type: 'leg',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/alternatinglunge-1456957263.gif?crop=1xw:1xh;center,top&resize=320:*',
            description: 'zancada',
        }, 
    
    
    /*Push*/
        push01: {
            id: 'push arquero',
            type: 'push',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-archerpushup.gif',
            description: 'push arquero',
        },
    
        push02: {
            id: 'push up lateral',
            type: 'push',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-sideplankwithquadstretch.gif',
            description: 'push up lateral',
        },
    
        push03: {
            id: 'estocada con pesas',
            type: 'push',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-levitatinglunge.gif',
            description: 'estocada con pesas',
        },
    
    
        push04: {
            id: 'balanceo de pesa rusa',
            type: 'push',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-singlearmkettlebellswing.gif',
            description: 'balanceo de pesa rusa',
        },
    
        
        push05: {
            id: 'press con mancuerna',
            type: 'push',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-dumbbellpushuppress.gif',
            description: 'press con mancuerna',
        },
    
        push06: {
            id: 'extensión de espalda',
            type: 'push',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/lyinghollowbodyhold-1457044774.gif?crop=1xw:1xh;center,top&resize=320:*',
            description: 'extensión de espalda',
        },
    
        push07: {
            id: 'superman',
            type: 'push',
            level: 2,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/supermany-1472154643.gif?crop=1xw:1xh;center,top&resize=640:*',
            description: 'superman',
        },
    
        push08: {
            id: 'push intermedio',
            type: 'push',
            level: 2,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/supermant-1472154358.gif?crop=1xw:1xh;center,top&resize=768:*&frame=1',
            description: 'push intermedio',
        },
    
        push09: {
            id: 'push básico',
            type: 'push',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/supermanw-1472154493.gif?crop=1xw:1xh;center,top&resize=640:*',
            description: 'push básico',
        },
    
        push10: {
            id: 'push avanzado',
            type: 'push',
            level: 3,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/supermanpullup-1472153970.gif?crop=1xw:1xh;center,top&resize=640:*',
            description: 'push avanzado',
        },
    
        push11: {
            id: 'plancha aeróbica',
            type: 'push',
            level: 3,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/08/supermandeadstoptosuperman-1472153653.gif?crop=1xw:1xh;center,top&resize=640:*',
            description: 'plancha aeróbica',
        },
    
        push12: {
            id: 'grip pushup',
            type: 'push',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/10/widegrippushup-1508248881.gif?crop=1xw:1xh;center,top&resize=640:*',
            description: 'grip pushup',
        },
    
        push13: {
            id: 't pushup',
            type: 'push',
            level: 3,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/04/tpushup-1461693226.gif?crop=1xw:1xh;center,top&resize=640:*&frame=1',
            description: 't pushup',
        },
    
        push14: {
            id: 'extensión básica',
            type: 'push',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/extendedrangepushup-1457044827.gif?resize=768:*',
            description: 'extensión básica',
        },
    
        push15: {
            id: 'flexión top',
            type: 'push',
            level: 3,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/situptohipup-1457045519.gif?crop=1xw:1xh;center,top&resize=320:*',
            description: 'flexión top',
        },
    
    /*Abd*/
        abd01: {
            id: 'plancha estática',
            type: 'abd',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-ironcrosshold.gif',
            description: 'plancha estática',
        },
    
        abd02: {
            id: 'push up del arquero',
            type: 'abd',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-archerpushup.gif',
            description: 'push up del arquero',
        },
    
        abd03: {
            id: 'alcance del cangrejo',
            type: 'abd',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-crabreach.gif',
            description: 'alcance del cangrejo',
        },
    
        abd04: {
            id: 'escalador de montañas',
            type: 'abd',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-feetelevatedmountainclimber.gif',
            description: 'escalador de montañas',
        },
    
        abd05: {
            id: 'puente',
            type: 'abd',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/hollowbodybridgehold-1457044657.gif?crop=1xw:1xh;center,top&resize=320:*',
            description: 'puente',
        },
    
        abd06: {
            id: 'flexión combinada',
            type: 'abd',
            level: 3,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-tpushup.gif',
            description: 'flexión combinada',
        },
    
        abd07: {
            id: 'movimientos de escalada',
            type: 'abd',
            level: 3,
            img: 'https://i.pinimg.com/originals/a5/f6/55/a5f6556329ff8d9f9dd71f0dd6ae1355.gif',
            description: 'movimientos de escalada',
        },
    
        abd08: {
            id: 'elevación simultánea',
            type: 'abd',
            level: 2,
            img: 'http://smartliferd.tk/wp-content/uploads/2018/05/Escalada-con-mancuernas.gif',
            description: 'elevación simultánea',
        },
    
        abd09: {
            id: 'caída libre',
            type: 'abd',
            level: 3,
            img: 'https://www.anytimestrength.com/wp-content/uploads/2017/07/Hollow-Body-Hold.gif',
            description: 'caída libre',
        },
    
        abd010: {
            id: 'adominal simple',
            type: 'abd',
            level: 1,
            img: 'https://www.anytimestrength.com/wp-content/uploads/2017/07/Knee-In-Crunch.gif',
            description: 'adominal simple',
        },
    
        
        abd011: {
            id: 'resistencia abdominal',
            type: 'abd',
            level: 1,
            img: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/frozen-v-sit.gif?resize=768:*',
            description: 'resistencia abdominal',
        },
    
        abd012: {
            id: 'sentadilla',
            type: 'abd',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-alternatinglateralpistolsquat.gif',
            description: 'sentadilla',
        },
    
        abd013: {
            id: 'abdominal propulsado',
            type: 'abd',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/05/menshealth.com-isometricsquatjumpladder.gif',
            description: 'abdominal propulsado',
        },
    
    
    /*Pull*/
        pull01: {
            id: 'remo',
            type: 'pull',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-dumbbellrow.gif',
            description: 'remo',
        },
    
        pull02: {
            id: 'deslizamiento lateral con mancuernas',
            type: 'pull',
            level: 1,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-dumbbellsidelungeandtouch.gif',
            description: 'deslizamiento lateral con mancuernas',
        },
    
        pull03: {
            id: 'extensión con peso',
            type: 'pull',
            level: 1,
            img: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/how-to-do-a-kettlebell-snatch.gif?resize=768:*',
            description: 'extensión con banda',
        },
    
        pull04: {
            id: 'press up',
            type: 'pull',
            level: 2,
            img: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/kettlbell-swing.gif?resize=768:*',
            description: 'press up',
        },  
    
        pull05: {
            id: 'burpees',
            type: 'pull',
            level: 2,
            img: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/1kettlebells.gif?resize=768:*',
            description: 'burpees',
        },
    
        pull06: {
            id: 'extensión de tricep',
            type: 'pull',
            level: 1,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/suitcasecarry-1457044898.gif?crop=1xw:1xh;center,top&resize=320:*',
            description: 'extensión de tricep',
        },
    
        pull07: {
            id: 'reto de fuerza controlada',
            type: 'pull',
            level: 3,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/pikepushup-1456956895.gif?resize=768:*',
            description: 'reto de fuerza controlada',
        },
    
        pull08: {
            id: 'lanzamiento de peso',
            type: 'pull',
            level: 2,
            img: 'https://www.laguiadelvaron.com/wp-content/uploads/2016/07/menshealth.com-singlearmkettlebellswing.gif',
            description: 'lanzamiento de peso',
        },
    
        pull09: {
            id: 'equilibrio con peso',
            type: 'pull',
            level: 2,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/singlearmsinglelegstraightlegdeadlift-1457031381.gif?resize=768:*',
            description: 'equilibrio con peso',
        },
    
        pull10: {
            id: 'reptil pesado',
            type: 'pull',
            level: 3,
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/plankcrawl-1457101944.gif?resize=768:*',
            description: 'reptil pesado',
        },
    
        pull11: {
            id: 'dumbblle clean',
            type: 'pull',
            level: 2,
            img: 'http://smartliferd.tk/wp-content/uploads/2018/05/Dumbbell-Clean.gif',
            description: 'dumbblle clean',
        },
    
        pull12: {
            id: 'espalda activa',
            type: 'pull',
            level: 1,
            img: 'http://smartliferd.tk/wp-content/uploads/2018/05/ila-doblada.gif',
            description: 'espalda activa',
        },
    
        pull13: {
            id: 'peso muerto',
            type: 'pull',
            level: 1,
            img: 'http://smartliferd.tk/wp-content/uploads/2018/05/Dos-pesas-con-mancuernas-r%C3%ADgidas-con-peso-muerto.gif',
            description: 'peso muerto',
        },
    
        pull14: {
            id: 'swing swang',
            type: 'pull',
            level: 2,
            img: 'http://smartliferd.tk/wp-content/uploads/2018/05/One-Swing-Swing.gif',
            description: 'swing swang',
        },
    
        pull15: {
            id: 'elevación alterna',
            type: 'pull',
            level: 3,
            img: 'http://smartliferd.tk/wp-content/uploads/2018/05/Cruz-del-martillo-del-cuerpo-Curl.gif',
            description: 'elevación alterna',
        },
    
    }

export default Exercises;