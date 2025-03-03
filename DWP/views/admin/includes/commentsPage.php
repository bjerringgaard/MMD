<?php

// Velkommen til den dybe kode, her er en lost spoiler. De er ikke alene på øen!!!!!!

class CommentsPage extends DbClass  {

    protected function getAllComments(){
        $sql = "SELECT * from comment";
        $result = $this->connect()->query($sql);
        $numRows = $result->num_rows;
        if($numRows > 0){
            while($row = $result->fetch_assoc()){
             $data[] = $row;
            }
            return $data;
        }
    }
}