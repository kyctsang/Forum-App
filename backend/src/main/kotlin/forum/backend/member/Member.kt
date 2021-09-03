package forum.backend.member

import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Member {
    @Id
    var username: String? = null
    var password: String? = null

}