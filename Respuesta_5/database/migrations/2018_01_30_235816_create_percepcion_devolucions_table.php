<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePercepcionDevolucionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        /*
		Schema::create('PercepcionDevolucion', function(Blueprint $table)
		{
            $table->engine = 'InnoDB';
			$table->char('percdev_cve',4)->primary();
            $table->string('percdev_desc',250);
            $table->char('percdev_estado',1);
            $table->
		});*/
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('PercepcionDevolucion');
	}

}
