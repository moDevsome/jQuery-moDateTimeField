/**
 * @package moDatetimeField
 * @link https://github.com/MOWebCreation/moDatetimeField
 * @author Mickaël Outhier (original founder)
 * @version 1.0
 * @copyright 2018 Mickaël Outhier
 * 
 * @license http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License
 * @note This program is distributed in the hope that it will be useful - WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.
 */

function moSetDatetimeField(formField) {
	
	var datetimeField = $('input#'+ formField).prev();
	var formFieldValue = new Array();
	
	var dateInputCounter = 0;
	var timeInputCounter = 0;
	
	//Prepare the string for an SQL record
	if(parseInt(datetimeField.attr('data-is-sql')) === 1) {
		
		//Bind default value
		formFieldValue['year'] = window.moCurrentYear;
		formFieldValue['month'] = '01';
		formFieldValue['day'] = '01';
		formFieldValue['hour'] = '00';
		formFieldValue['minutes'] = '00';
		formFieldValue['secondes'] = '00';
		
		datetimeField.find('input').each(function() {
			
			var value = $(this).val();
			if(value.length > 0) {
				formFieldValue[$(this).attr('data-field')] = $(this).val();	
			}
						
		});
		
		if(datetimeField.attr('data-function') === 'date') {
			$('input#'+ formField).val(formFieldValue['year'] +'-'+ formFieldValue['month'] +'-'+ formFieldValue['day']);
		}
		else if(datetimeField.attr('data-function') === 'time') {
			$('input#'+ formField).val(formFieldValue['hour'] +':'+ formFieldValue['minutes'] +':'+ formFieldValue['secondes']);
		}
		else {
			$('input#'+ formField).val(formFieldValue['year'] +'-'+ formFieldValue['month'] +'-'+ formFieldValue['day'] +' '+ formFieldValue['hour'] +':'+ formFieldValue['minutes'] +':'+ formFieldValue['secondes']);
		}
		
	}
	else {
		datetimeField.find('input').each(function() {
			
			var field_type = $(this).attr('data-field');
			var date_fields = new Array('year','month','day');
			
			var value = $(this).val();
			if(value.length > 0) {
				var value = $(this).val();	
			}
			else {
				var value = $(this).attr('data-default');
			}
			
			if(date_fields.indexOf(field_type) >= 0) {
									
				if(dateInputCounter === 0) {
					formFieldValue.push(value);
				}
				else {
					formFieldValue.push('-'+ value);
				}
				dateInputCounter++;
			}
			else {
				if(timeInputCounter === 0) {
					formFieldValue.push(' '+ value);
				}
				else {
					formFieldValue.push(':'+ value);
				}
				timeInputCounter++;
			}
		});
		$('input#'+ formField).val(formFieldValue.join(''));
	}
}

window.moCurrentYear = new Date().getFullYear();

window.moDatetimeFieldTranslation = new Array();

//EN (default)
window.moDatetimeFieldTranslation['en'] = new Array();
window.moDatetimeFieldTranslation['en']['date_format'] = 'Y-m-d';
window.moDatetimeFieldTranslation['en']['time_format'] = 'h:i:s';
window.moDatetimeFieldTranslation['en']['date_time_format'] = 'Y-m-d H:i:s';
window.moDatetimeFieldTranslation['en']['day_label'] = 'Day';
window.moDatetimeFieldTranslation['en']['month_label'] = 'Month';
window.moDatetimeFieldTranslation['en']['year_label'] = 'Year';
window.moDatetimeFieldTranslation['en']['day_placeholder'] = 'DD';
window.moDatetimeFieldTranslation['en']['year_placeholder'] = 'YYYY';
window.moDatetimeFieldTranslation['en']['hour_label'] = 'Hour';
window.moDatetimeFieldTranslation['en']['minutes_label'] = 'Minutes';
window.moDatetimeFieldTranslation['en']['secondes_label'] = 'Secondes';
window.moDatetimeFieldTranslation['en']['hour_placeholder'] = 'HH';
window.moDatetimeFieldTranslation['en']['minutes_placeholder'] = 'MM';
window.moDatetimeFieldTranslation['en']['secondes_placeholder'] = 'SS';
window.moDatetimeFieldTranslation['en']['month'] = new Array();
window.moDatetimeFieldTranslation['en']['month']['1'] = 'January';
window.moDatetimeFieldTranslation['en']['month']['2'] = 'February';
window.moDatetimeFieldTranslation['en']['month']['3'] = 'March';
window.moDatetimeFieldTranslation['en']['month']['4'] = 'April';
window.moDatetimeFieldTranslation['en']['month']['5'] = 'May';
window.moDatetimeFieldTranslation['en']['month']['6'] = 'June';
window.moDatetimeFieldTranslation['en']['month']['7'] = 'July';
window.moDatetimeFieldTranslation['en']['month']['8'] = 'August';
window.moDatetimeFieldTranslation['en']['month']['9'] = 'September';
window.moDatetimeFieldTranslation['en']['month']['10'] = 'October';
window.moDatetimeFieldTranslation['en']['month']['11'] = 'November';
window.moDatetimeFieldTranslation['en']['month']['12'] = 'December';

//FR
window.moDatetimeFieldTranslation['fr'] = new Array();
window.moDatetimeFieldTranslation['fr']['date_format'] = 'd-m-Y';
window.moDatetimeFieldTranslation['fr']['time_format'] = 'H:i:s';
window.moDatetimeFieldTranslation['fr']['date_time_format'] = 'd-m-Y H:i:s';
window.moDatetimeFieldTranslation['fr']['day_label'] = 'Jour';
window.moDatetimeFieldTranslation['fr']['month_label'] = 'Mois';
window.moDatetimeFieldTranslation['fr']['year_label'] = 'Année';
window.moDatetimeFieldTranslation['fr']['day_placeholder'] = 'JJ';
window.moDatetimeFieldTranslation['fr']['year_placeholder'] = 'AAAA';
window.moDatetimeFieldTranslation['fr']['hour_label'] = 'Heure';
window.moDatetimeFieldTranslation['fr']['minutes_label'] = 'Minutes';
window.moDatetimeFieldTranslation['fr']['secondes_label'] = 'Secondes';
window.moDatetimeFieldTranslation['fr']['hour_placeholder'] = 'HH';
window.moDatetimeFieldTranslation['fr']['minutes_placeholder'] = 'MM';
window.moDatetimeFieldTranslation['fr']['secondes_placeholder'] = 'SS';
window.moDatetimeFieldTranslation['fr']['month'] = new Array();
window.moDatetimeFieldTranslation['fr']['month']['1'] = 'Janvier';
window.moDatetimeFieldTranslation['fr']['month']['2'] = 'Fevrier';
window.moDatetimeFieldTranslation['fr']['month']['3'] = 'Mars';
window.moDatetimeFieldTranslation['fr']['month']['4'] = 'Avril';
window.moDatetimeFieldTranslation['fr']['month']['5'] = 'Mai';
window.moDatetimeFieldTranslation['fr']['month']['6'] = 'Juin';
window.moDatetimeFieldTranslation['fr']['month']['7'] = 'Juillet';
window.moDatetimeFieldTranslation['fr']['month']['8'] = 'Aout';
window.moDatetimeFieldTranslation['fr']['month']['9'] = 'Septembre';
window.moDatetimeFieldTranslation['fr']['month']['10'] = 'Octobre';
window.moDatetimeFieldTranslation['fr']['month']['11'] = 'Novembre';
window.moDatetimeFieldTranslation['fr']['month']['12'] = 'Decembre';

$.extend($.fn,{
	'moDateField': function(params) {
		
		if(typeof(params) === 'undefined') {
			var params = {'isSql':1};
		}
		else {
			if(typeof(params.isSql) === 'undefined') { params.isSql = 1; }
			else {
				params.isSql = parseInt(params.isSql);
			}
		}
							
		//Define the language
		if(typeof(params.language) === 'string') {
			var language = params.language.substring(0, 2);
		}
		else {
			var language = navigator.language;
		}
		if(typeof(window.moDatetimeFieldTranslation[language]) === 'undefined') {
			console.info('moDatetimeField Notice : unable to find "'+ language +'" in translations. So the script use the default "en" language.');
			var language = 'en';
		}
		
		//Define the format
		if(typeof(params.format) === 'string') {
			var format = params.format.substring(0, 5);
		}
		else {
			if(typeof(window.moDatetimeFieldTranslation[language]['date_format']) === 'string') {
				var format = window.moDatetimeFieldTranslation[language]['date_format'];
			} else {
				console.error('moDatetimeField Notice Error : unable to find a date format for "'+ language +'".');
			}
		}
		var format = format.split('-');
		
		this.each(function() {
			
			if(typeof($(this).attr('id')) === 'string') {
				var id = $(this).attr('id');
			}
			else {
				console.error('moDatetimeField Notice Error : please add an unique "id" attribute for the field "'+ $(this).attr('name') +'".');
				return false;
			}
			
			//Define the value
			if($(this).val().match('-')) {
				var current_value = $(this).val().split('-');
			}
			var current_value_index_counter = 0;
			
			var dateTimeFieldWrapper = '<div class="modatetime-field-container" data-function="date" data-is-sql="'+ params.isSql +'">';
			
			for(var field in format) {
										
				//Define the field type
				switch(format[field]) {
					
					case 'Y' :
					case 'y' :
					var field_type = 'year';
					break;
					
					case 'm' :
					var field_type = 'month';
					break;
					
					case 'd' :
					var field_type = 'day';
					break;
													
					default :
					var field_type = 'null';
					break;
				}
								
				if(field_type === 'day') {
					
					if(typeof(current_value) === 'object') {
						if(params.isSql === 1) {
							var value = current_value[2].substring(0, 2);
						}
						else {
							var value = current_value[current_value_index_counter].substring(0, 2);
							current_value_index_counter++;
						}
					} else {
						var value = '';
					}
					
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-day"><label for="'+ id +'__datetime_field_day">'+ window.moDatetimeFieldTranslation[language]['day_label'] +'</label><input type="text" maxlength="2" id="'+ id +'__datetime_field_day" name="'+ id +'__datetime_field_day" data-field="day" data-default="01" data-form-field="'+ id +'" value="'+ value +'" placeholder="'+window.moDatetimeFieldTranslation[language]['day_placeholder'] +'"/></div>';
				
				}
				else if(field_type === 'month') {
					
					if(typeof(current_value) === 'object') {
														
						if(params.isSql === 1) {
							var real_value = current_value[1].substring(0, 2);
						}
						else {
							var real_value = current_value[current_value_index_counter].substring(0, 2);
						}
						
						if(real_value.substring(0, 1) === '0') {
							var value = real_value.substring(1, 2);
						} else {
							var value = real_value;
						}
						current_value_index_counter++;
					} else {
						var real_value = '01';
						var value = '01';
					}
					
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-month"><label for="'+ id +'__datetime_field_month">'+ window.moDatetimeFieldTranslation[language]['month_label'] +'</label><input type="hidden" mxlenght="2" id="'+ id +'__datetime_field_month" name="'+ id +'__datetime_field_month" data-field="month" data-default="01" data-form-field="'+ id +'" value="'+ real_value +'"><select>';
					if(typeof(window.moDatetimeFieldTranslation[language]['month']) === 'object') {
						
						var monthOptions = '';
						for(month in window.moDatetimeFieldTranslation[language]['month']) {
							
							if(month === value) {
								var monthOptions = monthOptions + '<option value="'+ month +'" selected="selected">'+ window.moDatetimeFieldTranslation[language]['month'][month] +'</option>';
							}
							else {
								var monthOptions = monthOptions + '<option value="'+ month +'">'+ window.moDatetimeFieldTranslation[language]['month'][month] +'</option>';
							}
							
						}
					} else {
						console.error('datetimeField Error : unable to find month translation for "'+ language +'".');
					}
					var dateTimeFieldWrapper = dateTimeFieldWrapper + monthOptions + '</select></div>';						
				}				
				else if(field_type === 'year') {
				
					if(typeof(current_value) === 'object') {
						if(params.isSql === 1) {
							var value = current_value[0];
						}
						else {
							var value = current_value[current_value_index_counter].substring(0, 4);
							current_value_index_counter++;
						}
					} else {
						var value = '';
					}
					
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-year"><label for="'+ id +'__datetime_field_year">'+ window.moDatetimeFieldTranslation[language]['year_label'] +'</label><input type="text" maxlength="4" id="'+ id +'__datetime_field_year" name="'+ id +'__datetime_field_year" data-field="year" data-default="'+ window.moCurrentYear +'" data-form-field="'+ id +'" value="'+ value +'" placeholder="'+window.moDatetimeFieldTranslation[language]['year_placeholder'] +'"/></div>';
				
				}						
			}
			
			var dateTimeFieldWrapper = dateTimeFieldWrapper + '</div>';
			
			$(dateTimeFieldWrapper).insertBefore($(this));
		});
		
	},
	'moTimeField': function(params) {
		
		if(typeof(params) === 'undefined') {
			var params = {'isSql':1};
		}
		else {
			if(typeof(params.isSql) === 'undefined') { params.isSql = 1; }
			else {
				params.isSql = parseInt(params.isSql);
			}
		}
							
		//Define the language
		if(typeof(params.language) === 'string') {
			var language = params.language.substring(0, 2);
		}
		else {
			var language = navigator.language;
		}
		if(typeof(window.moDatetimeFieldTranslation[language]) === 'undefined') {
			console.info('moDatetimeField Notice : unable to find "'+ language +'" in translations. So the script use the default "en" language.');
			var language = 'en';
		}
		
		//Define the format
		if(typeof(params.format) === 'string') {
			var format = params.format.substring(0, 5);
		}
		else {
			if(typeof(window.moDatetimeFieldTranslation[language]['time_format']) === 'string') {
				var format = window.moDatetimeFieldTranslation[language]['time_format'];
			} else {
				console.error('moDatetimeField Notice Error : unable to find a time format for "'+ language +'".');
			}
		}
		var format = format.split(':');
		
		this.each(function() {
			
			if(typeof($(this).attr('id')) === 'string') {
				var id = $(this).attr('id');
			}
			else {
				var id = $(this).attr('name');
			}
			
			//Define the value
			if($(this).val().length > 0) {
				var current_value = $(this).val().split(':');
			}
			var current_value_index_counter = 0;
			
			var dateTimeFieldWrapper = '<div class="modatetime-field-container" data-function="time" data-is-sql="'+ params.isSql +'">';
			
			for(var field in format) {
				
				switch(format[field]) {
					
					case 'H':
					case 'h':
					var field_type = 'hour';
					break;
					
					case 'i':
					var field_type = 'minutes';
					break;
					
					case 's':
					var field_type = 'secondes';
					break;
					
					default :
					var field_type = 'null';
					break;
				}
				
				if(field_type != 'null') {
				
					if(typeof(current_value) === 'object') {
						var value = current_value[current_value_index_counter];
						current_value_index_counter++;
					} else {
						var value = '';
					}
						
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-'+ field_type +'"><label for="'+ id +'__datetime_field_'+ field_type +'">'+ window.moDatetimeFieldTranslation[language][field_type +'_label'] +'</label><input type="text" maxlength="2" id="'+ id +'__datetime_field_'+ field_type +'" name="'+ id +'__datetime_field_'+ field_type +'" data-field="'+ field_type +'" data-default="00" data-time-field="'+ format[field] +'" data-form-field="'+ id +'" value="'+ value +'" placeholder="'+window.moDatetimeFieldTranslation[language][field_type+ '_placeholder'] +'"/></div>';	
					
				}						
			}
			
			var dateTimeFieldWrapper = dateTimeFieldWrapper + '</div>';
			
			$(dateTimeFieldWrapper).insertBefore($(this));
		});
		
	},
	'moDatetimeField': function(params) {
		
		if(typeof(params) === 'undefined') {
			var params = {'isSql':1};
		}
		else {
			if(typeof(params.isSql) === 'undefined') { params.isSql = 1; }
			else {
				params.isSql = parseInt(params.isSql);
			}
		}
							
		//Define the language
		if(typeof(params.language) === 'string') {
			var language = params.language.substring(0, 2);
		}
		else {
			var language = navigator.language;
		}
		if(typeof(window.moDatetimeFieldTranslation[language]) === 'undefined') {
			console.info('moDatetimeField Notice : unable to find "'+ language +'" in translations. So the script use the default "en" language.');
			var language = 'en';
		}
		
		//Define the format
		if(typeof(params.format) === 'string') {
			var format = params.format.substring(0, 11);
		}
		else {
			if(typeof(window.moDatetimeFieldTranslation[language]['date_time_format']) === 'string') {
				var format = window.moDatetimeFieldTranslation[language]['date_time_format'];
			} else {
				console.error('moDatetimeField Notice Error : unable to find a date_time format for "'+ language +'".');
			}
		}
		var format = format.split(' ');
		var date_format = format[0].split('-');
		var time_format = format[1].split(':');
		var format = date_format.concat(time_format);
		
		this.each(function() {
			
			if(typeof($(this).attr('id')) === 'string') {
				var id = $(this).attr('id');
			}
			else {
				var id = $(this).attr('name');
			}
			
			//Define the value
			var field_value = $(this).val();
			if(field_value.match('-') && field_value.match(':')) {
				var current_value = $(this).val().split(' ');
				var current_date_value =  current_value[0].split('-');
				var current_time_value =  current_value[1].split(':');
				var current_value = current_date_value.concat(current_time_value);
			}
			var current_value_index_counter = 0;
			
			var dateTimeFieldWrapper = '<div class="modatetime-field-container" data-function="datetime" data-is-sql="'+ params.isSql +'">';
			
			for(var field in format) {
				
				//Define the field type
				switch(format[field]) {
					
					case 'Y' :
					case 'y' :
					var field_type = 'year';
					break;
					
					case 'm' :
					var field_type = 'month';
					break;
					
					case 'd' :
					var field_type = 'day';
					break;
					
					case 'H':
					case 'h':
					var field_type = 'hour';
					break;
					
					case 'i':
					var field_type = 'minutes';
					break;
					
					case 's':
					var field_type = 'secondes';
					break;
						
					default :
					var field_type = 'null';
					break;
				}
								
				if(field_type === 'day') {
					
					if(typeof(current_value) === 'object') {
						if(params.isSql === 1) {
							var value = current_value[2].substring(0, 2);
							current_value_index_counter++;
						}
						else {
							var value = current_value[current_value_index_counter].substring(0, 2);
							current_value_index_counter++;
						}
					} else {
						var value = '';
					}
					
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-day"><label for="'+ id +'__datetime_field_day">'+ window.moDatetimeFieldTranslation[language]['day_label'] +'</label><input type="text" maxlength="2" id="'+ id +'__datetime_field_day" name="'+ id +'__datetime_field_day" data-field="day" data-default="01" data-form-field="'+ id +'" value="'+ value +'" placeholder="'+window.moDatetimeFieldTranslation[language]['day_placeholder'] +'"/></div>';
				
				}
				else if(field_type === 'month') {
					
					if(typeof(current_value) === 'object') {
														
						if(params.isSql === 1) {
							var real_value = current_value[1].substring(0, 2);
						}
						else {
							var real_value = current_value[current_value_index_counter].substring(0, 2);
						}
						
						if(real_value.substring(0, 1) === '0') {
							var value = real_value.substring(1, 2);
						} else {
							var value = real_value;
						}
						current_value_index_counter++;
					} else {
						var real_value = '01';
						var value = '01';
					}
					
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-month"><label for="'+ id +'__datetime_field_month">'+ window.moDatetimeFieldTranslation[language]['month_label'] +'</label><input type="hidden" mxlenght="2" id="'+ id +'__datetime_field_month" name="'+ id +'__datetime_field_month" data-field="month" data-default="01" data-form-field="'+ id +'" value="'+ real_value +'"><select>';
					if(typeof(window.moDatetimeFieldTranslation[language]['month']) === 'object') {
						
						var monthOptions = '';
						for(month in window.moDatetimeFieldTranslation[language]['month']) {
							
							if(month === value) {
								var monthOptions = monthOptions + '<option value="'+ month +'" selected="selected">'+ window.moDatetimeFieldTranslation[language]['month'][month] +'</option>';
							}
							else {
								var monthOptions = monthOptions + '<option value="'+ month +'">'+ window.moDatetimeFieldTranslation[language]['month'][month] +'</option>';
							}
							
						}
					} else {
						console.error('datetimeField Error : unable to find month translation for "'+ language +'".');
					}
					var dateTimeFieldWrapper = dateTimeFieldWrapper + monthOptions + '</select></div>';						
				}				
				else if(field_type === 'year') {
					
					if(typeof(current_value) === 'object') {
						if(params.isSql === 1) {
							var value = current_value[0];
							current_value_index_counter++;
						}
						else {
							var value = current_value[current_value_index_counter].substring(0, 4);
							current_value_index_counter++;
						}
					} else {
						var value = '';
					}
					
					var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-year"><label for="'+ id +'__datetime_field_year">'+ window.moDatetimeFieldTranslation[language]['year_label'] +'</label><input type="text" maxlength="4" id="'+ id +'__datetime_field_year" name="'+ id +'__datetime_field_year" data-field="year" data-default="'+ window.moCurrentYear +'" data-form-field="'+ id +'" value="'+ value +'" placeholder="'+window.moDatetimeFieldTranslation[language]['year_placeholder'] +'"/></div>';
				
				}
				else {//Time fields OR null...
					
					if(field_type != 'null') {
					
						if(typeof(current_value) === 'object') {
							var value = current_value[current_value_index_counter].substring(0, 2);
							current_value_index_counter++;
						} else {
							var value = '';
						}
							
						var dateTimeFieldWrapper = dateTimeFieldWrapper + '<div class="modatetime-field-wrapper modatetime-'+ field_type +'"><label for="'+ id +'__datetime_field_'+ field_type +'">'+ window.moDatetimeFieldTranslation[language][field_type +'_label'] +'</label><input type="text" maxlength="2" id="'+ id +'__datetime_field_'+ field_type +'" name="'+ id +'__datetime_field_'+ field_type +'" data-field="'+ field_type +'" data-time-field="'+ format[field] +'" data-default="00" data-form-field="'+ id +'" value="'+ value +'" placeholder="'+window.moDatetimeFieldTranslation[language][field_type+ '_placeholder'] +'"/></div>';	
						
					}
					
				}
			}
			
			var dateTimeFieldWrapper = dateTimeFieldWrapper + '</div>';
			
			$(dateTimeFieldWrapper).insertBefore($(this));
		});
		
	}
});

//Year field update with computer keyboard
$('body').on('keyup', 'div.modatetime-field-wrapper > input[data-field="year"]', function(e){
	
	var intCheck = $(this).val().match(/^[0-9]*$/);
	if(intCheck == null) {
		$(this).val( $(this).val().replace(e.key, '') );
		return false;
	}
	
	var value = parseInt($(this).val());
	
	if(value.toString().length === 4) {
		$(this).addClass('keyup');
		moSetDatetimeField($(this).attr('data-form-field'));
	}
});
//Year field update with mobile device keyboard
$('body').on('focusout', 'div.modatetime-field-wrapper > input[data-field="year"]', function(e){
	
	if($(this).hasClass('keyup')) {//Computer keyboard
		$(this).removeClass('keyup');
	}
	else {//Mobile device keyboard

		var intCheck = $(this).val().match(/^[0-9]*$/);
		if(intCheck == null) {
			$(this).val('');
			return false;
		}
		
		var value = parseInt($(this).val());
		
		if(value.toString().length === 4) {
			moSetDatetimeField($(this).attr('data-form-field'));
		}
	}
});

//Month field update
$('body').on('change', 'div.modatetime-field-wrapper > input[data-field="month"] + select', function(e){
	var value = parseInt($(this).val());
	
	if(value >= 1 && value <= 9) {
		var string_value = '0' + value.toString();
	}
	else if(value >= 10 && value <= 12) {
		var string_value = value.toString();
	}
	else { return false; }
	
	var month_update = $(this).prev().val( string_value );
	
	month_update.promise().done(function() {
		moSetDatetimeField($(this).attr('data-form-field'));
	});
});

//Day field update with computer keyboard
$('body').on('keyup', 'div.modatetime-field-wrapper > input[data-field="day"]', function(e){
	
	var intCheck = $(this).val().match(/^[0-9]*$/);
	if(intCheck == null) {
		$(this).val( $(this).val().replace(e.key, '') );
		return false;
	}
	if($(this).val().length != 2) { return false; }

	var value = parseInt($(this).val());
	if(value < 10) {
		var value_string = '0' + value.toString();
	}
	else {
		var value_string = value.toString();
	}
	
	if(value < 1 || value > 31) {
		$(this).val('');
		return false;
	}
	
	if(value_string.length === 2) {
		$(this).addClass('keyup');
		moSetDatetimeField($(this).attr('data-form-field'));
	}
});
//Day field update with mobile device keyboard
$('body').on('focusout', 'div.modatetime-field-wrapper > input[data-field="day"]', function(e){
	
	if($(this).hasClass('keyup')) {//Computer keyboard
		$(this).removeClass('keyup');
	}
	else {//Mobile device keyboard

		var intCheck = $(this).val().match(/^[0-9]*$/);
		if(intCheck == null) {
			$(this).val( '' );
			return false;
		}
		if($(this).val().length != 2) { return false; }

		var value = parseInt($(this).val());
		if(value < 10) {
			var value_string = '0' + value.toString();
		}
		else {
			var value_string = value.toString();
		}
		
		if(value < 1 || value > 31) {
			$(this).val('');
			return false;
		}
		
		if(value_string.length === 2) {
			$(this).addClass('keyup');
			moSetDatetimeField($(this).attr('data-form-field'));
		}
	}
});

//Hour field update with computer keyboard
$('body').on('keyup', 'div.modatetime-field-wrapper > input[data-field="hour"]', function(e){
	
	var intCheck = $(this).val().match(/^[0-9]*$/);
	if(intCheck == null) {
		$(this).val( $(this).val().replace(e.key, '') );
		return false;
	}
	if($(this).val().length != 2) { return false; }

	var value = parseInt($(this).val());
	if(value < 10) {
		var value_string = '0' + value.toString();
	}
	else {
		var value_string = value.toString();
	}
	
	if($(this).attr('data-time-field') === 'H') {
		if(value < 0 || value > 23) {
			$(this).val('');
			return false;
		}
	}
	else {
		if(value < 0 || value > 12) {
			$(this).val('');
			return false;
		}
	}
	
	if(value_string.length === 2) {
		$(this).addClass('keyup');
		moSetDatetimeField($(this).attr('data-form-field'));;
	}
});
//Hour field update with mobile device keyboard
$('body').on('focusout', 'div.modatetime-field-wrapper > input[data-field="hour"]', function(e){
	
	if($(this).hasClass('keyup')) {//Computer keyboard
		$(this).removeClass('keyup');
	}
	else {//Mobile device keyboard

		var intCheck = $(this).val().match(/^[0-9]*$/);
		if(intCheck == null) {
			$(this).val( '' );
			return false;
		}
		if($(this).val().length != 2) { return false; }

		var value = parseInt($(this).val());
		if(value < 10) {
			var value_string = '0' + value.toString();
		}
		else {
			var value_string = value.toString();
		}
		
		if($(this).attr('data-time-field') === 'H') {
			if(value < 0 || value > 23) {
				$(this).val('');
				return false;
			}
		}
		else {
			if(value < 0 || value > 12) {
				$(this).val('');
				return false;
			}
		}
		
		if(value_string.length === 2) {
			moSetDatetimeField($(this).attr('data-form-field'));;
		}
	}
});


//Minutes and secondes field update with computer keyboard
$('body').on('keyup', 'div.modatetime-field-wrapper > input[data-field="minutes"], div.modatetime-field-wrapper > input[data-field="secondes"]', function(e){
	
	var intCheck = $(this).val().match(/^[0-9]*$/);
	if(intCheck == null) {
		$(this).val( $(this).val().replace(e.key, '') );
		return false;
	}
	if($(this).val().length != 2) { return false; }

	var value = parseInt($(this).val());
	if(value < 10) {
		var value_string = '0' + value.toString();
	}
	else {
		var value_string = value.toString();
	}
	
	if(value < 0 || value > 59) {
		$(this).val('');
		return false;
	}
	
	if(value_string.length === 2) {
		$(this).addClass('keyup');
		moSetDatetimeField($(this).attr('data-form-field'));
	}
});
//Minutes and secondes field update with mobile device keyboard
$('body').on('focusout', 'div.modatetime-field-wrapper > input[data-field="minutes"], div.modatetime-field-wrapper > input[data-field="secondes"]', function(e){
	
	if($(this).hasClass('keyup')) {//Computer keyboard
		$(this).removeClass('keyup');
	}
	else {//Mobile device keyboard

		var intCheck = $(this).val().match(/^[0-9]*$/);
		if(intCheck == null) {
			$(this).val( '' );
			return false;
		}
		if($(this).val().length != 2) { return false; }

		var value = parseInt($(this).val());
		if(value < 10) {
			var value_string = '0' + value.toString();
		}
		else {
			var value_string = value.toString();
		}
		
		if(value < 0 || value > 59) {
			$(this).val('');
			return false;
		}
		
		if(value_string.length === 2) {
			moSetDatetimeField($(this).attr('data-form-field'));
		}
	}
});