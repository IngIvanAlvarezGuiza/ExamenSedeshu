<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTipoPreciosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('TipoPrecio', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->string('tipprecio_cve',50)->primary();
            $table->string('tiprecio_desc',250);
            $table->decimal('tiprecio_precio',10,2);
            
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('TipoPrecio');
	}

}
