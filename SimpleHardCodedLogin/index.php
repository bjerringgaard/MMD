<style>
	body {
		background-color: #ececec;
		width: 100vw;
	}

	#control {
		margin: 0 auto;
		height: fit-content;
		display: flex;
	}

	form {
		margin: 0 auto;
		margin-top: 400px;
		align-content: center;
		width: 250px;
		height: fit-content;
	}

	#btn {
		background-color: #2ecc71;
		color: white; 
		border: none; 
		width: 150px;
		height: 50px;
		border-radius: 25px;
		font-size: 24px;
		margin: 0 0 0 20%;

	}
	#user, #pass {
		width: 250px;
		height: 50px;
		margin: 0 auto;
		margin-bottom: 10px;
		border: none; 
		border-radius: 25px;
		padding: 20px;
		font-size: 24px;
	}

	#answer {
		color: red;
		margin: 20px auto 0 auto;
		align-content: center;
		font-size: 32px;
		font-family: Arial, Helvetica, sans-serif;
	}

	p {
		width: 250px;
		text-align: center;
	}
</style>

<div id="control">
<form method='POST'> 
	<input id="user" type="text" name="name" placeholder="Username"> <br>
	<input id="pass" type="password" name="password" placeholder="Password"> <br>
    <input id="btn" type="submit" name="submit" value="Login">
</form>
</div>

<?php
$user = 'test';
$code = '1234';

if(isset($_POST['submit']) && !empty($_POST['name']) && !empty($_POST['password'])) {
	if($user === $_POST['name'] AND $code === $_POST['password']) {
		header("Location: login.php");
	}
	else{
		echo '<p id="answer">' . 'WRONG';
	}
}
?>





