@extends('layouts.base')

@section('body')
    <div id="app" data-country-count="{{ $count }}" data-country-regions="{{ json_encode($filteredRegions) }}">
    </div>
@endsection