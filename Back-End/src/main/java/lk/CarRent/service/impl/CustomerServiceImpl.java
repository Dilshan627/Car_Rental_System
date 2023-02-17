package lk.CarRent.service.impl;

import lk.CarRent.dto.CustomerDTO;
import lk.CarRent.entity.Customer;
import lk.CarRent.repo.CustomerRepo;
import lk.CarRent.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

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


}
