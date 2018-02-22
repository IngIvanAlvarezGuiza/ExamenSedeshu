<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTipoNominasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('TipoNomina', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->string('tipnomina_cve',50)->primary();
            $table->string('tipnomina_desc',250);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('TipoNomina');
	}

}
