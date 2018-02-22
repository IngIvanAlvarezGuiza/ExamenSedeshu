<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Usuario', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->tinyInteger('usu_cve')->primary()->unsigned();
            $table->string('usu_nombre',30);
            $table->string('usu_usuario',30);
            $table->string('usu_contrasenia',30);
            $table->string('usu_salt',512);
            $table->string('usu_hash',512);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Usuario');
	}

}
