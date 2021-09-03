package forum.backend.member

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface MemberRepository : JpaRepository<Member, String> {

    fun findByUsername(username: String?): Member

    @Query("SELECT username from forum.member where username=?1 and password=MD5(?2)", nativeQuery = true)
    fun loginattempt(username: String, password: String): String
}