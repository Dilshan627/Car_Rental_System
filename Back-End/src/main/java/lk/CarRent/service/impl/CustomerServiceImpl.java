package lk.CarRent.service.impl;

import lk.CarRent.dto.CustomerDTO;
import lk.CarRent.entity.Customer;
import lk.CarRent.repo.CustomerRepo;
import lk.CarRent.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO customer) {
        if (!customerRepo.existsById(customer.getId())) {
            customerRepo.save(mapper.map(customer, Customer.class));
        } else {
            throw new RuntimeException(customer.getId() + " " + "Customer Already Exists..!");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {
        if (customerRepo.existsById(customer.getId())) {
            customerRepo.save(mapper.map(customer, Customer.class));
        } else {
            throw new RuntimeException(customer.getId() + " " + "No Such Customer..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (customerRepo.existsById(Long.valueOf(id))) {
            customerRepo.deleteById(Long.valueOf(id));
        } else {
            throw new RuntimeException(id + " " + "No Such Customer..! Please Check The Correct Id..!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (customerRepo.existsById(Long.valueOf(id))) {
            Customer customer = customerRepo.findById(Long.valueOf(id)).get();
            return mapper.map(customer, CustomerDTO.class);
        } else {
            throw new RuntimeException(id + " " + "No Such Customer..! Please Check The Id..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> all = customerRepo.findAll();
        return mapper.map(all, new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }


}
