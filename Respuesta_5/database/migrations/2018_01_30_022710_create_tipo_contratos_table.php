<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTipoContratosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('TipoContrato', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->string('tipcontrat_cve',50)->primary();
            $table->string('tipcontrat_desc',250);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('TipoContrato');
	}

}
