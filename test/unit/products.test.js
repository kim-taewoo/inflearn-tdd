const httpMocks = require('node-mocks-http');
const productModel = require('../../models/Product');
const productController = require('../../controller/products');
const newProduct = require('../data/new-product.json');

// Mock 함수들
productModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('Product Controller Create', () => {
  beforeEach(() => {
    req.body = newProduct;
  });
  it('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function');
  });
  it('should call ProductModel.create', async () => {
    await productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
    // newProduct 를 인자로 호출되는지 확인
  });
  it('should return 201 response code', async () => {
    await productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy(); // send 가 왔는가
  });
  it('should return json body in response', async () => {
    productModel.create.mockReturnValue(newProduct);
    await productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });
  it("Should handle errors", async () => {
    const errorMessage = {message: "description property missing"};
    const rejectPromise = Promise.reject(errorMessage);
    productModel.create.mockReturnValue(rejectPromise);
    await productController.createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  })
});

describe("Product Controller Get", () => {
  it('should have a getProducts function', () => {
    expect(typeof productController.getProducts).toBe("function")
  })
})