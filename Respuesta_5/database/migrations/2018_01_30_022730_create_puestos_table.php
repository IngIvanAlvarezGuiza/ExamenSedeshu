<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePuestosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Puesto', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->string('pues_cve',50)->primary();
            $table->string('pues_desc',250);
            $table->char('pues_estado',1);
            $table->string('tipnomina_cve',50);
            $table->string('tipprecio_cve',50);
            $table->foreign('tipnomina_cve')->references('tipnomina_cve')->on('TipoNomina');
            $table->foreign('tipprecio_cve')->references('tipprecio_cve')->on('TipoPrecio');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Puesto');
	}

}
