

function min(array){return Math.min.apply(Math,array)}
function max(array){return Math.max.apply(Math,array)}


function containsArray(listOfArrays, checked){
    // list of arrays has form: [[Array0],[Array1],etc.]
    // returns true if checked == any array within listOfArrays
    //assumes all arrays are same length!
    if (listOfArrays.length ==0){
        return false
    }
    
    let non_matching = 0;
    for (let i=0; i<listOfArrays.length;i++){
        var is_matching = true;
        for (let j=0; j<checked.length; j++){
            if (checked[j] != listOfArrays[i][j]){
                is_matching = false;
            }
        }
        if (is_matching == false){
            non_matching++;
        }
    }
    
    if (listOfArrays.length - non_matching == 0){
        return false;
    } else {
        return true;
    }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function remove_val_old(list, val){ //previous version of remove_val
    index = 0;
    for (let i=0;i<list.length;i++){
        if (list[i] == val){
            index = i;
        }
    }
    delete list[index];
    let result = [];
    for (let i=0; i < list.length; i++){
        if(typeof list[i] != "undefined"){
            result.push(list[i]);
        }
    }
    return result;
}

function remove_val(list,val){
    let result = [];
    for (let i=0;i<list.length;i++){
        if (list[i] != val){
            result.push(list[i]);
        }
    }
    return result;
}

function isRepeat(list){ //checks if there are repeats in a list
     //remaining
    for(let i = 0; i<list.length; i ++){
        for (let j=i+1; j<list.length;j++){
            if (list[i] == list[j]){
                return true;
            }
        }
    }
    return false;
}

class cell{
    constructor (cell_index){
        this.isComputerAssigned = false;
        this.index = cell_index;
        this.row = Math.floor(cell_index/9);
        this.column = cell_index % 9;
        this.sqr = (Math.floor(this.row/3)) *3 + Math.floor(this.column/3); //the square tile index of the cell
        this.correct = 0;
        this.val = 0;
        this.possibleVals = [1,2,3,4,5,6,7,8,9];
        this.notes = [];
        //this.impossibleVals = [];
    }
    
    assign_value(val){
        this.val = val;
        this.possibleVals = [];
        if (val ==0){
            this.possibleVals = [1,2,3,4,5,6,7,8,9];
        }
        //this.impossibleVals = [1,2,3,4,5,6,7,8,9];
    }
    
    assignRand(){
        this.assign_value(this.possibleVals[getRandomInt(0,this.possibleVals.length)]);
    }
    
    reducePossible(sudoku_board){
        this.possibleVals = [1,2,3,4,5,6,7,8,9];
        if (this.val != 0){this.possibleVals = [];}
        let vals_in_group = [];
        for (let i=0; i<sudoku_board.cells.length;i++){
            if ((sudoku_board.cells[i].row == this.row || sudoku_board.cells[i].column == this.column ||sudoku_board.cells[i].sqr == this.sqr) && (i != this.index)){
                if ((sudoku_board.cells[i].val != 0) && !(vals_in_group.includes(sudoku_board.cells[i].val))){
                    vals_in_group.push(sudoku_board.cells[i].val);
                }
            }
        }
        
        for (let i=0; i<vals_in_group.length;i++){
            if (this.possibleVals.includes(vals_in_group[i])){
                this.possibleVals = remove_val(this.possibleVals,vals_in_group[i]);            
            }
            
        }
        
    }
}



class sudoku_board{
    constructor(){
        this.cellsAsClues = []; //cells that were restricted to a single spot during generation, can be removed to create unique puzzle.
        this.solution = []; //assigned Solution/ original values
        this.cells = [];
        this.computedSolutions = []; //solutions computed through solver
        for (let i=0;i<81;i++){
            var new_cell = new cell(i);
            this.cells.push(new_cell);
        }
        //------ TO DO -----
        //assign values
        //run initial_compare for all cells!
    }
    
    count_zeros(){
        let count = 0;
        for (let cell_index=0; cell_index< this.cells.length; cell_index++){
            let cell = this.cells[cell_index];
            if (cell.val ==0){
                count++;
            }
        }
        return count;
    }
    
    getValsArray(){
        let allVals = [];
        for (let i=0; i<this.cells.length; i++){
            allVals.push(this.cells[i].val);
        }
        return allVals;
    }
    
    reset_board(){
        this.cells = [];
        for (let i=0;i<81;i++){
            var new_cell = new cell(i);
            new_cell.assign_value(0);
            this.cells.push(new_cell);
        }
    }
    
    set_value([row,column],val_to_set){
        let index = (row*9 + column);
        this.cells[index].assign_value(val_to_set);
    }
    
    setBoardFromArray(array2set){
        if (array2set.length == 81){
            for (let i=0; i<81;i++){
                this.cells[i].assign_value(array2set[i]);
            }
        }
        
    }
    print_to_console(){
        let line_str = "";
        for(let i=0;i<this.cells.length;i++){
//             line_str += this.cells[i].val;
            if (typeof this.cells[i].val == "undefined" ){ //|| this.cells[i].val == 0
                line_str +="[]";
            }
            else {if (this.cells[i].val.toString().length == 1){
                line_str +=" ";
            }
            line_str += this.cells[i].val.toString();
            line_str += " ";
            }
            if ((i+1)%3 ==0){
                line_str += "  ";
            }
            
            
            
            if ((i+1)%9 == 0 && i!=0){
                console.log(line_str);
                line_str = "";
            }
            if ((i+1)%27 == 0){
                console.log("");
            }
            
        }
        console.log(line_str);
    }
    
    generateFull(){
        console.log("Creating!");
        //this.restrictedCells = [];
        let remaining_indices = [];
        for(let i=0; i<81; i++){remaining_indices.push(i)}
        for(let i=0; i<81; i++){
            let current_row_availabilities = {};
            for (let j=0; j<remaining_indices.length; j++){
                
                let current_cell = this.cells[remaining_indices[j]];
                current_cell.reducePossible(this);
                let len = current_cell.possibleVals.length;
                if (!Object.keys(current_row_availabilities).includes(len.toString())){
                    current_row_availabilities[len] = [];
                }
                current_row_availabilities[len].push(current_cell.index);
            
                
                }
                let key = min(Object.keys(current_row_availabilities));
                let cell_ind = current_row_availabilities[key][0];
                this.cells[cell_ind].reducePossible(this);
                this.cells[cell_ind].assignRand();
                remaining_indices = remove_val (remaining_indices,cell_ind);
//                 if (key == '1'){
//                     this.restrictedCells.push(cell_ind);
//                 }
            }
            
        let has_null = false;
        let valid_vals = [1,2,3,4,5,6,7,8,9]
        for (let i=0;i<this.cells.length;i++){
            if (!valid_vals.includes(this.cells[i].val)){
                has_null = true;
            }
        }
        if(has_null){
            this.reset_board();
            this.generateFull();
        }
        for (let i =0; i<this.cells.length; i++){
            this.solution.push(this.cells[i].val);
        }    
    }
    
    
    solve(){ //solves until the unique solution is found, it is deemed unsolvable, or it is deemed to have more than one solution
        if (this.computedSolutions.length >=2) {
            return
        }
        for (let i =0; i<this.cells.length; i++){
            if (this.cells[i].val ==0 ){
                this.cells[i].reducePossible(this);
                let possibilities2test = this.cells[i].possibleVals;
                for (let j=0;j<possibilities2test.length;j++){
                    this.cells[i].assign_value(possibilities2test[j]);
                    if (this.isValidLayout()){
                    this.solve();
                    }
                }
                this.cells[i].assign_value(0);
                return;
            }
            
        }
        let current_solution = this.getValsArray();
        if (!containsArray(this.computedSolutions, current_solution)){
            this.computedSolutions.push(current_solution);
            
        
        }
//       
    }
    
    hasUniqueSolution(){
        this.computedSolutions = [];
        
        this.solve();
        if (this.computedSolutions.length > 1 || this.computedSolutions.length ==0){
            return false;
        }
        return true;
        
    }
    
    
    removeRandPairs(){
        let pairs = [];
        for (let i=0; i<41; i++){
            pairs.push([i,80-i]);
        }
        while(pairs.length > 0){
            
            let current_pair_ind = getRandomInt(0,pairs.length);
            
            let current_pair = pairs[current_pair_ind];
            for (let i=0; i<current_pair.length;i++){
                this.cells[current_pair[i]].assign_value(0);
            }
            if (!this.hasUniqueSolution()){
                for (let i=0;i<current_pair.length;i++){
                    this.cells[current_pair[i]].assign_value(this.solution[current_pair[i]]);
                }
            }
            pairs = remove_val(pairs, current_pair);
        }
    }
    
    
    isValidLayout(){ //Causes problems...
        for(let group_index = 0; group_index< 9; group_index++){
            
            let row_group = [];
            let col_group = [];
            let sqr_group = [];
            
            for(let cell_index = 0; cell_index<81;cell_index++){
                if (this.cells[cell_index].row == group_index){
                    row_group.push(this.cells[cell_index].val);
                }
                if (this.cells[cell_index].column == group_index){
                    col_group.push(this.cells[cell_index].val);
                }
                if (this.cells[cell_index].sqr == group_index){
                    sqr_group.push(this.cells[cell_index].val);
                }
            }
            row_group = remove_val(row_group,0);
            col_group = remove_val(col_group,0);
            sqr_group = remove_val(sqr_group,0);
            
            if(isRepeat(row_group) || isRepeat(col_group) || isRepeat(sqr_group)){
                return false;
            }
            
        } return true;
    }
    
    
    noteCompAssigned(){
        for (let i=0; i<this.cells.length;i++){
            if (this.cells[i].val !=0){this.cells[i].isComputerAssigned = true}
        }
    }
    
    addFurtherClues(){
        let clueCount = getRandomInt(1,5);
        let zeros = [];
        for (let i=0;i<this.cells.length;i++){
            if (this.cells[i].val == 0){
                zeros.push(i);
            }
        }
        for (let i=0;i<clueCount;i++){
            let ind = getRandomInt(0,zeros.length);
            this.cells[ind].assign_value(this.solution[ind]);
            zeros = remove_val(zeros,ind);
        }
    }

    mainConstruct(){
        this.generateFull();
        this.removeRandPairs();
        //this.addFurtherClues();
        this.noteCompAssigned();
        
        

    }
    
}





sb = new sudoku_board();
sb.mainConstruct();
// var x=[0,7,0,0,4,8,6,0,0,9,0,0,0,0,5,1,2,8,0,0,3,0,9,6,0,4,7,0,0,0,0,8,4,2,3,1,5,0,1,0,0,0,9,0,4,0,3,8,9,1,0,0,0,0,6,4,0,8,0,0,3,0,0,8,5,2,7,0,0,0,0,9,0,0,7,4,2,0,0,6,0]

// sb.setBoardFromArray(x);

// console.log(sb.hasUniqueSolution());
