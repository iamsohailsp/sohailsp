output "ec2_security_group_id" {
  value = aws_security_group.sohelpathansp_sg.id
}

output "autoscaling_group_id" {
  value = aws_autoscaling_group.example.id
}
