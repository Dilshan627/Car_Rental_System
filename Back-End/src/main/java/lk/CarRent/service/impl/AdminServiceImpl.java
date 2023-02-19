package lk.CarRent.service.impl;

import lk.CarRent.dto.AdminDTO;
import lk.CarRent.entity.Admin;
import lk.CarRent.repo.AdminRepo;
import lk.CarRent.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveAdmin(AdminDTO admin) {
        if (!adminRepo.existsById(admin.getAdminId())) {
            adminRepo.save(mapper.map(admin, Admin.class));
        } else {
            throw new RuntimeException(admin.getAdminId() + " " + "Admin Already Exists..!");
        }
    }

    @Override
    public void updateAdmin(AdminDTO admin) {
        if (adminRepo.existsById(admin.getAdminId())) {
            adminRepo.save(mapper.map(admin, Admin.class));
        } else {
            throw new RuntimeException(admin.getAdminId() + " " + "No Such Admin..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(Long.valueOf(id))) {
            adminRepo.deleteById(Long.valueOf(id));
        } else {
            throw new RuntimeException(id + " " + "No Such Admin..! Please Check The Correct Id..!");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (adminRepo.existsById(Long.valueOf(id))) {
            Admin admin = adminRepo.findById(Long.valueOf(id)).get();
            return mapper.map(admin, AdminDTO.class);
        } else {
            throw new RuntimeException(id + " " + "No Such Admin..! Please Check The Id..!");
        }
    }
}
