<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCausaBajasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('CausaBaja', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
            $table->tinyInteger('cbaja_cve')->primary()->unsigned();
            $table->string('cbaja_desc',250);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('CausaBaja');
	}

}
