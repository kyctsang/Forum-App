package forum.backend.member

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/membersinfo")
class MemberController {
    @Autowired
    var memberRepository: MemberRepository? = null

    @GetMapping("/all")
    fun getAllMember(): Iterable<Member>{
       return memberRepository!!.findAll()
    }

    @PostMapping("/login")
    fun login(@RequestBody member: Member): Boolean {
        var value = false
        try{
            if (memberRepository!!.loginattempt(member.username!!, member.password!!).isNotEmpty()){
                value = true
            }
        }catch(e: EmptyResultDataAccessException){
            value = false
        }
        return value
    }

    @PostMapping("/create")
    fun create(@RequestBody member: Member): String{
        var value = ""
        try{
            if (memberRepository!!.findByUsername(member.username).username!!.isNotEmpty()){
                value = "Failed: Username duplicate, please try other username."
            }
        }catch(e: EmptyResultDataAccessException){
            memberRepository!!.save(member)
            value = "User has been created succesfully!"
        }
        return value
    }
}