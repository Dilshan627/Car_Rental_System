package lk.CarRent.service;

import lk.CarRent.dto.AdminDTO;

public interface AdminService {
    void saveAdmin(AdminDTO admin);

    void updateAdmin(AdminDTO admin);

    void deleteAdmin(String id);

    AdminDTO searchAdmin(String id);

    AdminDTO findByAdminNameAndAdminPassword(String username, String password);

}
