package lk.CarRent.service;

import lk.CarRent.dto.AdminDTO;
import lk.CarRent.dto.CustomerDTO;

public interface AdminService {
    void saveAdmin(AdminDTO admin);

    void updateAdmin(AdminDTO admin);

    void deleteAdmin(String id);

    AdminDTO searchAdmin(String id);
}
