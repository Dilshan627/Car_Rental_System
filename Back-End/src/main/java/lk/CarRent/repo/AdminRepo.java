package lk.CarRent.repo;

import lk.CarRent.entity.Admin;
import lk.CarRent.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin, Long> {

    Admin findByAdminNameAndAdminPassword(String name, String password);

}
