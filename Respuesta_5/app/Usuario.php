<?php namespace Examen;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model {

	//
	protected $table = 'Usuario';
    protected $primaryKey = 'usu_cve';
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = ['usu_cve','usu_nombre','usu_usuario','usu_contrasenia','usu_salt','usu_hash'];
}
