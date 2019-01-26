<?php

#give file location
$input = 'visit.sql';
#give col number of date starting at 0
$colNum = 3;
#give date change in english 
#e.g. "+1 month", "-4 month", "+24 day", etc.
$dateChange = "+4 month";


#function that returns an array populated with everything
#in between the parameters tag_open and tag_close
function tag_contents($string, $tag_open, $tag_close){ 
   foreach (explode($tag_open, $string) as $key => $value) {
       if(strpos($value, $tag_close) !== FALSE){
            $result[] = trim(substr($value, 0, strpos($value, $tag_close)));
       }
   }
   return $result;
}

$output = fopen('new.'.$input,'w');

$file = file_get_contents($input);

$header = substr($file,0,strpos($file,'('));
// echo $header;
fwrite($output, $header);

$insertValues = tag_contents($file,'(', ')');
foreach($insertValues as $row) {
    fwrite($output, '(');
    $columns = str_getcsv($row);
    $prevDate = trim($columns[$colNum],"'");
    $newDate = date("Y-m-d H:i:s", strtotime($dateChange, strtotime($prevDate)));
    // echo $newDate;
    $columns[$colNum] = "'".$newDate."'";
    $newRow = implode(",", $columns);
    // echo $newRow;
    fwrite($output, $newRow);
    fwrite($output, ")\n\t");   
}

fclose($output);

?>
