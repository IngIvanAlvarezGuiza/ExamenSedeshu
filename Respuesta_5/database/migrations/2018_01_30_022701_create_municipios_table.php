<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMunicipiosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Municipio', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';

			$table->integer('mun_cve')->primary()->unsigned();
			$table->string('mun_desc',100);
			$table->mediumInteger('est_cve')->unsigned();
			$table->foreign('est_cve')->references('est_cve')->on('Estado');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Municipio');
	}

}
