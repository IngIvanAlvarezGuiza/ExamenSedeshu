<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClasificacionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Clasificacion', function(Blueprint $table)
		{
            $table->engine = 'InnoDB';
			$table->char('clas_cve',6)->primary();
            $table->string('clas_desc',250);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Clasificacion');
	}

}
