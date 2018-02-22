<?php namespace Examen;

use Illuminate\Database\Eloquent\Model;

class Acceso extends Model {

	//
	protected $table = 'Acceso';
    protected $primaryKey = 'acc_cve';
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = ['acc_cve','acc_nombre'];

}
