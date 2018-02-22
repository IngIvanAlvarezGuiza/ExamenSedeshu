<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAsentamientosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Asentamiento', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';

			$table->integer('asen_cve')->primary()->unsigned();
			$table->string('asen_desc',100);
			$table->string('asen_ciudad',100);
			$table->string('asen_zona',15);
			$table->char('asen_cp',5);
			$table->string('asen_tipo',50);
			$table->integer('mun_cve')->unsigned();
			$table->foreign('mun_cve')->references('mun_cve')->on('Municipio');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Asentamiento');
	}

}
