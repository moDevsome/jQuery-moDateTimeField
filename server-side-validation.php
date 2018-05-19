<?php
  $success_mess = array();
	$error_mess = array();
					
	if(!empty($_POST)) {
		$fields = array('exemple1','exemple2','exemple3','exemple4','exemple5','exemple6');
		
		foreach($_POST as $key => $value) {
			
			if(in_array($key, $fields)) {
				
				if($key === 'exemple6') {
					$value = explode('-', $value);
					$month = substr($value[1], 0, 2);
					$hour = substr($value[1], 3, 8);
					$value = $value[0].'-'.$month.'-'.date('Y').' '.$hour;
				}
				
				$time = strtotime($value);
				
				if($time === FALSE) {
					$error_mess[] = $value.' is a bad value for the field '.$key;
				}
				else {
					$success_mess[] = $key.' : '.$value.', '.$time;
				}
			}
		}
	}
?>
