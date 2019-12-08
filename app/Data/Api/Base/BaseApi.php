<?php

namespace App\Data\Api\Base;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\MessageFormatter;
use GuzzleHttp\Middleware;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Logger;

abstract class BaseApi {

  /**
   * @var string
   */
  protected $api_base;

  /**
   * @var \Monolog\Logger
   */
  protected $logger;

  /**
   * Get a request
   *
   * @param $method string
   * @param array|string $uri_params string
   * @param array $query_params
   * @return mixed
   */
  public function getRequest($method, $uri_params = [], $query_params = []) {
    $response = $this->getClient()->get($this->createURI($method, $uri_params), [
      'query' => $query_params,
    ]);

    return $this->bodyToJson($response);
  }

  /**
   * Create a URI from a method template
   *
   * @param $method
   * @param $uri_params
   * @return string
   */
  protected function createURI($method, $uri_params) {
    return \GuzzleHttp\uri_template($method, $uri_params);
  }

  /**
   * Decode the body to JSON
   *
   * @param $response
   * @return mixed
   */
  private function bodyToJson($response) {
    return json_decode((string) $response->getBody());
  }

  /**
   * Create a Guzzle client
   *
   * @return \GuzzleHttp\Client
   */
  private function getClient() {
    return new Client([
      'base_uri' => $this->getApiClientBaseURI(),
      'http_errors'     => true,
      'decode_content'  => true,
      'verify'          => false,
      'cookies'         => false
    ]);
  }

  /**
   * Get the base API URI
   *
   * @return string
   */
  protected function getApiClientBaseURI() {
    return $this->addProtocol($this->api_base);
  }

  /**
   * If http or https is not configured, default to http
   *
   * @param $server
   * @return string
   */
  protected function addProtocol($serverURL) {
    if ($this->startsWith($serverURL, 'https://') || $this->startsWith($serverURL, 'http://'))
      return $serverURL;

    return 'http://' . $serverURL;
  }

  // Function to check string starting
// with given substring
  private function startsWith($string, $startString)
  {
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
  }


}
