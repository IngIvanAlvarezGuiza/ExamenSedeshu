<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstadosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Estado', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';

			$table->mediumInteger('est_cve')->primary()->unsigned();
			$table->string('est_desc',100);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Estado');
	}

}
