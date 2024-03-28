function grab_from_data() {
    //the workoutformbtn is the name of the submit button on the form
    if( isset($_POST['workoutformbtn']) ):
                   //these next 4 lines are for debugging, they write to php_erre.log file, these are the fields of the form to check that php is accessing the info from the from when submit button is triggered
        //comment them out when you're done debugging your site
        error_log("workoutdate");
        error_log($_POST['activity']);
        error_log($_POST['time_min']);
        error_log($_POST['user_id']);

        //create an array of the form fields to pass to the php file that will handle inserting new data into the database table
        $fields = array(
            'workoutdate' => $_POST['workoutdate'],
            'activity' => $_POST['activity'],
            'time_min' => $_POST['time_min'],
            'user_id' => $_POST['user_id']
        );

        //this calls the php file that will insert the data(coming from fields array) into your database table
        wp_remote_post(
            'http://localhost:8000/database-files/create_workout.php',
            ['body' => $fields,]
        );
        //after the data is inserted into the database you redirect them back to the workout form page
        wp_safe_redirect('http://localhost:8000'); 
    endif;
    
}