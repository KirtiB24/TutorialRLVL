def reverse(A,start,end):
    while(start<end):
        A[start] ,A[end]=A[end],A[start]
        start +=1
        end -=1
A = [1,23,44,7,9]
print(A)
reverse(A,0,4)
print(A)
