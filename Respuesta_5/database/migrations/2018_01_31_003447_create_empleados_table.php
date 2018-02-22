<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpleadosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        
		Schema::create('Empleado', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
            $table->mediumInteger('emp_cve')->primary()->unsigned();
			$table->string('emp_nombre',50);
			$table->string('emp_ap',30);
            $table->string('emp_am',30);
            $table->char('emp_fechnac',10);
            $table->char('emp_fechalta',10);
            $table->char('emp_fechbaja',10);
            $table->char('emp_gen',1);
            $table->string('emp_obsbaja',250);
            $table->string('emp_domicilio',250);
			$table->char('emp_telef',10);
            $table->char('emp_edocivil',1);
			$table->string('dep_cve',50);
			$table->string('pues_cve',50);
            $table->tinyInteger('cbaja_cve')->unsigned();
			$table->string('tipcontrat_cve',50);
            $table->tinyInteger('turn_cve')->unsigned();
			$table->integer('mun_cve')->unsigned();
            $table->integer('asen_cve')->unsigned();
            /*$table->char('clas_cve',6);*/
			$table->foreign('dep_cve')->references('dep_cve')->on('Departamento');
			$table->foreign('pues_cve')->references('pues_cve')->on('Puesto');
			$table->foreign('cbaja_cve')->references('cbaja_cve')->on('CausaBaja');
			$table->foreign('tipcontrat_cve')->references('tipcontrat_cve')->on('TipoContrato');
            $table->foreign('turn_cve')->references('turn_cve')->on('Turno');
            $table->foreign('asen_cve')->references('asen_cve')->on('Asentamiento');
			$table->foreign('mun_cve')->references('mun_cve')->on('Municipio');
            /*$table->foreign('clas_cve')->references('clas_cve')->on('Clasificacion');*/
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('Empleado');
	}

}
