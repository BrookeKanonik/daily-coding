//Instructions:

/*
Given a n by n matrix, see if the rat can get out of the maze (0,0) to (n-1,n-1) with only going down and right
*/

//Code:

function solveMazeUtil (maze, x, y, sol) { //maze = original maze given to us with all possibilities, x and y are current coordinates of the rat and sol is the solution we have so far 
    //create empty array with all 0s for sol based on maze length
    sol = new Array(maze.length)

    for (let i = 0; i < maze.length; i++){
        sol[i] = new Array(maze.length)
    }
    if (x == maze.length-1 && y == maze.length-1){ //if the rat made it to the end
        sol[x][y] = 1;
        return true;
    }

    //below is extra and what i need to work on
    if (isSafe(maze,x,y) === true){ //check to see if current location is inside the maze
        sol[x][y] = 1; //if it is in the maze, at current location to solution for now

        if (solveMazeUtil(maze, x+1, y, sol) == true){ //if a path is found in x direction return true
            return true
        }
        if (solveMazeUtil(maze, x, y+1, sol) == true){ //if a path is found in y direction return true
            return true
        }

        sol[x][y] = 0;
        return false //if no path found return false and backtrack
    }
    return false; //location outside of maze then return false

}

solveMazeUtil([[1,0,0,0],[1,1,1,1], [0,0,1,1], [0,0,1,1]], 0, 0, [])


//Maze solve with an array of strings recursion 

/*
["#####E#", 
"#      #", 
"#S######"]
*/

function solveMaze (maze, wall,start,end){
    const seen= //boolean 2D array 
    const path=  //point array

    for (let i =0; i<maze.length; i++){
        seen.push(new Array(maze[0].length).fill(false))
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}

const dir = [
    [-1,0],
    [1,0],
    [0,1],
    [0,-1]
]

function walk(maze, wall, curr, end, seen, path){ //path is an array 
    //base case off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >=maze.length) {
            return false;
        }
    //on a wall
    if(maze[curr.y][curr.x] === wall){
        return false; 
    }
    //its the end
    if (curr.x === end.x && curr.y === end.y){
        path.push(end)
        return true; //we have found the end
    }

    //if weve seen it already
    if(seen[curr.y][curr.x]){
        return false
    }
    
    //pre
    seen[curr.y][curr.x] = true;
    path.push(curr)
    //recurse
    for (let i=0; i<dir.length; i++){
        const [x,y] = dir[i]
       if ( walk(maze,wall, {
            x: curr.x + x,
            y: curr.y + y,
        }, end, seen, path)) { //if walk is successful 
            return true;
        }
    }
    //post
    path.pop()
    return false;
}