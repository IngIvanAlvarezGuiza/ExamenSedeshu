<?php namespace Examen;

use Illuminate\Database\Eloquent\Model;

class Permiso extends Model {

	//
	protected $table = 'Permiso';
    protected $primaryKey = 'per_cve';
    protected $primaryKey = 'acc_cve';
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = ['usu_cve','acc_cve'];

}
