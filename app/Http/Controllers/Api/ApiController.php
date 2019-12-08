<?php
namespace App\Http\Controllers\Api;

use App\Data\Api\CountryApi;
use Illuminate\Http\Request;

class ApiController {

  /**
   * @var  App\Data\Api\CountryApi
   */
  private $apiClient;

  public function __construct(CountryApi $apiClient) {
    $this->apiClient = $apiClient;
  }

  /**
   * Retrieve countries
   *
   * @param \Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getCountries() {
    $response = $this->apiClient->getCountries();
    return response()->json($response);
  }
}
