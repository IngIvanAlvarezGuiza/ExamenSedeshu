<?php namespace Examen\Http\Controllers;

use Examen\Http\Requests;
use Examen\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Examen\Usuario;

class UsuarioController extends Controller {

	/**
	 *Obtener el último id insertado en la tabla
     *
	 * @return Integer
	*/
	public function obtenerUltimoID(){

		$usuario = Usuario::latest('usu_cve')->first();

		if(!empty($usuario)){
			return ($usuario->usu_cve)+1;
		}else{
			return 1;
		}
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
		$usuarios = Usuario::all();

		return view('usuario.index',compact('usuarios'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
		return view('usuario.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		//
		if($request->ajax()){
			Usuario::create($request->all());
			return response()->json([
				"mensaje"=> "Successfully created!"
			]); 
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
		$usuario = Usuario::find($id);

		return view('usuario.show',compact('usuario'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
		$usuario = Usuario::find($id);

		return view('usuario.edit',compact('usuario'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request,$id)
	{
		$usuario = Usuario::find($id);
		$usuario->fill($request->all());
		$usuario->save();

		return response()->json([
			"mensaje"=> "Successfully updated!"
			//$turno->toArray()
		]); 

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
