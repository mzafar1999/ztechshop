import React from 'react'

const TVCat = () => {
  return (
    <Container className="p-5">
      <h1 className="text-center mb-4">Add Product</h1>
      <Box className="register-form">
        <Form onSubmit={formik.handleSubmit}>
          <Box className="form-group row">
            <Col className="col-sm-6">
              <Box>
                <Label htmlFor="category">Category</Label>
                <Select
                  defaultValue={categories}
                  onChange={(selectedOption) =>
                    formik.setFieldValue("category", selectedOption.value)
                  }
                  options={categoriesOptions}
                  value={formik.values.categories}
                />
              </Box>
              <Box>
                <Label htmlFor="name"> Product Full Name </Label>
                <Input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <Box className="text-danger">
                  {formik.errors.name ? formik.errors.name : null}
                </Box>
              </Box>

              {/* Start of Storage selection */}
              {formik.values.category === "smartPhone" && (
                <Box>
                  <Label htmlFor="storage">Phone Storage</Label>
                  <Select
                    defaultValue={phoneStorage}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("storage", selectedOption.value)
                    }
                    options={phoneStorageOptionos}
                    value={formik.storage}
                  />
                </Box>
              )}
              {formik.values.category === "laptop" && (
                <Box>
                  <Label htmlFor="laptop">Laptop Storage</Label>
                  <Select
                    defaultValue={laptopStorage}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("storage", selectedOption.value)
                    }
                    options={laptopStorageOptions}
                    value={formik.storage}
                  />
                </Box>
              )}
              {formik.values.category === "console" && (
                <Box>
                  <Label htmlFor="console">Console Storage</Label>
                  <Select
                    defaultValue={consoleStorage}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("storage", selectedOption.value)
                    }
                    options={consoleStorageOptions}
                    value={formik.storage}
                    name={"storage"}
                  />
                </Box>
              )}

              {/* Brand Selection */}
              {formik.values.category === "smartPhone" && (
                <Box>
                  <Label htmlFor="brand">Brand</Label>
                  <Select
                    defaultValue={phoneBrand}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("brand", selectedOption.value)
                    }
                    value={formik.brand}
                    options={phoneBrandOptions}
                  />
                </Box>
              )}
              {formik.values.category === "laptop" && (
                <Box>
                  <Label htmlFor="brand">Brand</Label>
                  <Select
                    defaultValue={laptopBrand}
                    options={laptopBrandOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("brand", selectedOption.value)
                    }
                    value={formik.brand}
                  />
                </Box>
              )}
              {formik.values.category === "tv" && (
                <Box>
                  <Label htmlFor="brand">Brand</Label>
                  <Select
                    defaultValue={tvBrand}
                    options={TVBrandOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("brand", selectedOption.value)
                    }
                    value={formik.brand}
                  />
                </Box>
              )}
              {formik.values.category === "console" && (
                <Box>
                  <Label htmlFor="brand">Brand</Label>
                  <Select
                    defaultValue={consoleBrand}
                    options={consoleBrandOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("brand", selectedOption.value)
                    }
                    value={formik.brand}
                  />
                </Box>
              )}

              {/* Start of OS Selection */}
              {formik.values.category === "smartPhone" && (
                <Box>
                  <Label htmlFor="os">OS</Label>
                  <Select
                    defaultValue={phoneOS}
                    options={phoneOSOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("os", selectedOption.value)
                    }
                    value={formik.os}
                    name="os"
                  />
                </Box>
              )}
              {formik.values.category === "laptop" && (
                <Box>
                  <Label htmlFor="os">OS</Label>
                  <Select
                    defaultValue={laptopOS}
                    options={laptopOSOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("os", selectedOption.value)
                    }
                    value={formik.os}
                    name="os"
                  />
                </Box>
              )}

              <Box className="mt-4">
                  <input type="file" name="file" multiple onChange={uploadImages} />
                  {/* <button onClick={uploadImages}>Upload</button> */}

              </Box>

              {/* Size Selection */}

              {formik.values.category === "tv" && (
                <Box>
                  <Label htmlFor="screenSize">Screen Size</Label>
                  <Select
                    defaultValue={tvSize}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("screenSize", selectedOption.value)
                    }
                    name="tv"
                    options={TVSizeOptions}
                  />
                </Box>
              )}
            </Col>
            <Col className="col-sm-6">
              {/* Start of Color */}
              {formik.values.category === "smartPhone" && (
                <Box>
                  <Label htmlFor="smartphonecolor">Phone Color</Label>
                  <Select
                    defaultValue={deviceColor}
                    options={phoneColorOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("color", selectedOption.value)
                    }
                    value={formik.color}
                  />
                </Box>
              )}
              {formik.values.category === "laptop" && (
                <Box>
                  <Label htmlFor="laptopcolor">Laptop Color</Label>
                  <Select
                    defaultValue={laptopColor}
                    options={laptopColorOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("color", selectedOption.value)
                    }
                    name="color"
                    value={formik.color}
                  />
                </Box>
              )}
              {formik.values.category === "console" && (
                <Box>
                  <Label htmlFor="consolecolor">Console Color</Label>
                  <Select
                    defaultValue={consoleColor}
                    options={consoleColorOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("color", selectedOption.value)
                    }
                    name="color"
                    value={formik.color}
                  />
                </Box>
              )}
              {formik.values.category === "tv" && (
                <Box>
                  <Label htmlFor="color">Laptop Color</Label>
                  <Select
                    defaultValue={TVColor}
                    options={TVColorOptions}
                    onChange={(selectedOption) =>
                      formik.setFieldValue("color", selectedOption.value)
                    }
                    name="color"
                    value={formik.color}
                  />
                </Box>
              )}
              <Box>
                <Label htmlFor="model_name"> Model Name </Label>
                <Input
                  name="model_name"
                  type="model_name"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.model_name}
                />
                <Box className="text-danger">
                  {formik.errors.model_name ? formik.errors.model_name : null}
                </Box>
              </Box>
              {formik.values.category === "smartPhone" && (
                <Box>
                  <Label htmlFor="name"> Screen Size </Label>
                  <Input
                    name="size"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.size}
                  />
                </Box>
              )}

              <Box>
                <Label htmlFor="price"> Price </Label>
                <Input
                  name="price"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </Box>
              <Box className="form-group">
                <Label htmlFor="description"> Product Description </Label>
                <Textarea
                  rows="6"
                  name="description"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                <Box className="text-danger">
                  {formik.errors.description ? formik.errors.description : null}
                </Box>
              </Box>
            </Col>
          </Box>

          <Box className="form-group">
            <GreenStyledButton smallBorder type="submit">
              Add Product
            </GreenStyledButton>
          </Box>
        </Form>
        <Box></Box>
      </Box>
    </Container>
  );
}

export default TVCat