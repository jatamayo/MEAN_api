const router = require('express').Router();
// Mongo DB
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['tasks']) // DB name


// GET All
// Return all task(json)
router.get('/tasks', function(req, res, next){
    db.tasks.find( function(err, tasks){
        if (err) return next(err);
        res.json(tasks);
    });
});


// GET One
// Return one element by id
router.get('/tasks/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(!task.title || !(task.isDone + '')){
            res.status(400).json({
                error: 'Bad Request'    
            });
        }else{
            db.tasks.save(task, function(err, task){
                if (err) return next(err);
                res.json(task);
            }); 
        }        
    });
});


// Delete One
router.delete('/tasks/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, result){
        if (err) return next(err);
        res.json(result);
    });
});


// PUT One
router.put('/tasks/:id', function(req, res, next){
    const task = req.body;
    const updateTask = {};
    if(task.isDone){
        updateTask.isDone = task.isDone;
    }
    if(task.title){
        updateTask.title = tasks.title;
    }
    if(!updateTask){
        res.status(400).json({
            error:'Bad Request'
        });
    }else{
        db.tasks.update({_id: mongojs.ObjectID(req.params.id)}, function(err, task){
            if(err) return next(err);
            res.json(task);
        });
    }
});


module.exports = router;