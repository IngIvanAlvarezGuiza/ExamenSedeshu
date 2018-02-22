<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccesosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('Acceso', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->tinyInteger('acc_cve')->primary()->unsigned();
            $table->string('acc_nombre',30);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Acceso');
	}

}
