<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermisosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Permiso', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->tinyInteger('usu_cve')->unsigned();
			$table->tinyInteger('acc_cve')->unsigned();
			$table->primary(['usu_cve','acc_cve']);
            $table->foreign('usu_cve')->references('usu_cve')->on('Usuario');
            $table->foreign('acc_cve')->references('acc_cve')->on('Acceso');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Permiso');
	}

}
