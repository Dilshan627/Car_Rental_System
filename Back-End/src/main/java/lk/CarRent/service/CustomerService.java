package lk.CarRent.service;

import lk.CarRent.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO customer);

    void updateCustomer(CustomerDTO customer);

    void deleteCustomer(String id);

    CustomerDTO searchCustomer(String id);

    List<CustomerDTO> getAllCustomers();

    CustomerDTO findByCustomerUserNameAndCustomerPassword(String username, String password);

}
